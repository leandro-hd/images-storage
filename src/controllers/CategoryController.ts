import { Request, Response } from 'express';
import Category from '../models/Category';
import Image from '../models/Image';
import * as Yup from 'yup';
import fs from 'fs';

export default {
  async index(request: Request, response: Response) {
    const category_show = await Category.findAll();
    const image_show = await Image.findAll();

    return response.status(200).json({category_show, image_show});
  },

  async show(request: Request, response: Response) {
    const { id } = request.params;

    const category_show = await Category.findByPk(id);
    
    if (category_show === null) {
      return response.status(400).json('Category not exists!');
    }

    const image_show = await Image.findAll({ where: { category_id: category_show.dataValues.id }});

    return response.status(200).json(image_show);
  },

  async store(request: Request, response: Response) {
    const { category } = request.body;

    const requestImages = request.files as Express.Multer.File[];

    const images = requestImages.map(image => {
      return { 
          path: image.filename
      };
    });

    const schema = Yup.object().shape({
      category: Yup.string().required()
    });

    try {
      await schema.validate(request.body, { abortEarly: false })
    } catch (err) {
      for (let requestImage of requestImages) {
        fs.unlink(requestImage.path, (err) => {
          if (err) {
            console.error(err);
            return;
          }        
        })
      }
      return response.status(400).json('Category is required!');
    }
    
    const categoryAlreadyExists = await Category.findOne({ where: { category: category } });

    if (categoryAlreadyExists) {
      for (let requestImage of requestImages) {
        fs.unlink(requestImage.path, (err) => {
          if (err) {
            console.error(err);
            return;
          }        
        })
      }
      return response.status(400).json('Category already exists!');
    };
    
    try {
      await Category.create(request.body);
      
      const data_images = {
        category,
        images
      }
      
      const id = await Category.findOne({
        where: { category: category }
      })
     
      for (let image of data_images.images) {
        let image_string = JSON.stringify(image);
        let image_formatted = image_string.substring( 9, image_string.length - 2);
        await Image.create({ category_id: id.dataValues.id, path: image_formatted })
      }
    
      return response.status(201).json({ data_images });
    } catch {
      for (let requestImage of requestImages) {
        fs.unlink(requestImage.path, (err) => {
          if (err) {
            console.error(err);
            return;
          }        
        })
      }

      return response.status(500).json('Internal server error');
    }
  }
};
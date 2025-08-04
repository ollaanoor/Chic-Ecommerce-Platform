import type { NextApiRequest, NextApiResponse } from 'next';
import dbConnect from '@/lib/dbConnect';
import Product from '@/models/Product';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  await dbConnect();

  switch (req.method) {
    case 'GET':
      try {
        const products = await Product.find();
        res.status(200).json(products);
      } catch (error) {
        res.status(500).json({ message: 'Server error' });
      }
      break;

    case 'POST':
      try {
        const product = await Product.create(req.body);
        res.status(201).json(product);
      } catch (error: any) {
        res.status(400).json({ message: error.message });
      }
      break;

    default:
      res.setHeader('Allow', ['GET', 'POST']);
      res.status(405).json({ message: `Method ${req.method} Not Allowed` });
  }
}

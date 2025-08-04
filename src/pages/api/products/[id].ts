import type { NextApiRequest, NextApiResponse } from 'next';
import dbConnect from '@/lib/dbConnect';
import Product from '@/models/Product';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;
  await dbConnect();

  switch (req.method) {
    case 'GET':
      try {
        const product = await Product.findById(id);
        if (!product) {
            return res.status(404).json({ message: 'Not found' });
        } 
        res.status(200).json(product);
      } catch {
        res.status(500).json({ message: 'Server error' });
      }
      break;

    case 'PUT':
      try {
        const product = await Product.findByIdAndUpdate(id, req.body, { new: true });
        if (!product) {
            return res.status(404).json({ message: 'Not found' });
        }
        res.status(200).json(product);
      } catch (error: any) {
        res.status(400).json({ message: error.message });
      }
      break;

    case 'DELETE':
      try {
        const deleted = await Product.findByIdAndDelete(id);
        if (!deleted) {
            return res.status(404).json({ message: 'Not found' });
        } 
        res.status(204).end(); 
      } catch {
        res.status(500).json({ message: 'Server error' });
      }
      break;

    default:
      res.setHeader('Allow', ['GET', 'PUT', 'DELETE']);
      res.status(405).json({ message: `Method ${req.method} Not Allowed` });
  }
}

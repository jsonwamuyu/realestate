// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({ name: 'John Doe' })
}
// const axios = require("axios");

// const options = {
//   method: 'GET',
//   url: 'https://bayut.p.rapidapi.com/auto-complete',
//   params: {query: 'abu dhabi', hitsPerPage: '25', page: '0', lang: 'en'},
//   headers: {
//     'X-RapidAPI-Key': '1c6a99e45bmshff8436199eb00b0p1d6dd5jsn0798304bb861',
//     'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
//   }
// };

// axios.request(options).then(function (response) {
// 	console.log(response.data);
// }).catch(function (error) {
// 	console.error(error);
// });
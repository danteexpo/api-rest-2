import { Router } from 'express';
import { readdirSync } from 'fs';

const PATH_ROUTER = `${__dirname}`;

const router = Router();

const cleanFileName = (fileName: string) => {
  return fileName.split('.').shift();
};

readdirSync(PATH_ROUTER).filter((fileName) => {
  const cleanedFileName = cleanFileName(fileName);
  if (cleanedFileName !== 'index') {
    import(`./${cleanedFileName}`).then((moduleRouter) => {
      console.log(`Loading /${cleanedFileName} route...`);
      router.use(`/${cleanedFileName}`, moduleRouter.router);
    });
  }
});

export default router;

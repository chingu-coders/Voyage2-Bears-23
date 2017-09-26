/**
 * Voyage-2 Team-Bears-23
 * @date 26/09/2017
 *
 * @ticket SLNKR-002
 * @link https://github.com/chingu-coders/Voyage2-Bears-23/projects/1#card-4811806
 *
 * @flow
 */
import { Router as router } from 'express';

const apiRouter = router();

apiRouter.get('/', (req, res) => {
  res.send('API route OK');
});

export default apiRouter;

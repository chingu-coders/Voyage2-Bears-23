/**
 * Voyage-2 Team-Bears-23
 * @date 26/09/2017
 *
 * @ticket SLNKR-002
 * @link https://github.com/chingu-coders/Voyage2-Bears-23/projects/1#card-4811806
 *
 * @flow
 */

const PageNotFoundHandlerMiddleware = () => {
  return (req: Object, res: Object) => {
    res.redirect('https://jigsaw.w3.org/HTTP/300/');
  };
};

export default PageNotFoundHandlerMiddleware;

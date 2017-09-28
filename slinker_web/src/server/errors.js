/**
 * Voyage-2 Team-Bears-23
 * @date 26/09/2017
 *
 * @ticket SLNKR-002
 * @link https://github.com/chingu-coders/Voyage2-Bears-23/projects/1#card-4811806
 *
 * @flow
 */
const appError = message => _createError(message);

const redirectError = (message, redirect) => {
  if (typeof redirect === 'undefined') {
    throw new Error('redirectError: redirect param not specified');
  }

  return _addRedirect(redirect)(_createError(message, 'redirectError'));
};

const serviceError = (message, status) => {
  if (typeof status === 'undefined') {
    throw new Error('serviceError: status param not specified');
  }

  return _addStatus(status)(_createError(message, 'serviceError'));
};

const _createError = (message = 'Unknown error', type = null) => {
  let error = new Error(message);

  error.name = type || error.name;

  return error;
};

const _addErrorProp = prop => error => {
  Object.keys(prop).map(propKey => {
    error[propKey] = prop[propKey];
  });

  return error;
};

const _addRedirect = redirect => _addErrorProp({redirect});

const _addStatus = status => _addErrorProp({status});

export {
  appError,
  redirectError,
  serviceError
};

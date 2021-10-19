import validUrl from 'valid-url';
/**
   * Prefixes a given id with '0x' if the prefix does not exist
   *
   * @param {string} chainId - The chainId to prefix
   * @returns {string} The chainId, prefixed with '0x'
   */
   export const   prefixChainId = (chainId) => {
    let prefixedChainId = chainId;
    if (!chainId.startsWith('0x')) {
      prefixedChainId = `0x${parseInt(chainId, 10).toString(16)}`;
    }
    return prefixedChainId;
  }

  export const isSubmitting = (state) => {
    return state.isSubmitting;
  }

  export const hasError = (errors, errorKey, errorKeyVal) => {
    return errors[errorKey]?.key === errorKeyVal;
  };

  export const hasErrors = (errors) => {
    // const { errors } = this.state;
    return Object.keys(errors).some((key) => {
      const error = errors[key];
      // Do not factor in duplicate chain id error for submission disabling
      if (key === 'chainId' && error.key === 'chainIdExistsErrorMsg') {
        return false;
      }
      return error.key && error.msg;
    });
  };

  isValidWhenAppended = (url) => {
    const appendedRpc = `http://${url}`;
    return validUrl.isWebUri(appendedRpc) && !url.match(/^https?:\/\/$/u);
  };
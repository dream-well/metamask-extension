import React from 'react';
import PropTypes from 'prop-types';
import { useI18nContext } from '../../../../hooks/useI18nContext';
import NetworkFormTextField from '../network-form-textfield';

const AddNetworkForm = ({
    rpcUrl,
    chainId,
    ticker,
    networkName,
    blockExplorerUrl,
    setStateWithValue,
    validateUrlRpcUrl,
    validateChainIdOnChange,
    validateBlockExplorerURL,
    onCancel,
    onSubmit,
    viewOnly,
}) => {
    const t = useI18nContext();
    return (
        <div className="add-network-form__body">
        <div className="add-network-form__subheader">
          <span className="add-network-form__sub-header-text">
            {t('networks')}
          </span>
          <span>{'  >  '}</span>
          <div className="add-network-form__subheader--break">
            {t('addANetwork')}
          </div>
        </div>
        <div className="add-network-form__content">
          <div className="add-network-form__content--warning">
            {t('onlyAddTrustedNetworks')}
          </div>
          <div className="add-network-form__form-column">
            <div className="add-network-form__form-row">
                <NetworkFormTextField
                    className= 'add-network-form__network-form-row'
                    fieldKey= 'networkName'
                    textFieldId= 'network-name'
                    onChange= { () => setStateWithValue('networkName')}
                    value= {networkName}
                    autoFocus= {true}
                    viewOnly={viewOnly}
                />
                <NetworkFormTextField
                    className= 'add-network-form__network-form-row'
                    fieldKey= 'rpcUrl'
                    textFieldId= 'rpc-url'
                    onChange= {() => setStateWithValue(
                    'rpcUrl',
                    validateUrlRpcUrl,
                    )}
                    value= {rpcUrl}
                    viewOnly={viewOnly}
                />
              {/* {renderFormTextField({
                className: 'add-network-form__network-form-row',
                fieldKey: 'networkName',
                textFieldId: 'network-name',
                onChange: setStateWithValue('networkName'),
                value: networkName,
                autoFocus: true,
              })}
              {renderFormTextField({
                className: 'add-network-form__network-form-row',
                fieldKey: 'rpcUrl',
                textFieldId: 'rpc-url',
                onChange: setStateWithValue(
                  'rpcUrl',
                  validateUrlRpcUrl,
                ),
                value: rpcUrl,
              })} */}
            </div>
            <div className="add-network-form__form-row">
                <NetworkFormTextField
                    className= 'add-network-form__network-form-row'
                    fieldKey= 'chainId'
                    textFieldId= 'chainId'
                    onChange= { () => etStateWithValue(
                        'chainId',
                        validateChainIdOnChange(rpcUrl),
                      )}
                    value= {chainId}
                    viewOnly={viewOnly}
                />
                <NetworkFormTextField
                    className= 'add-network-form__network-form-row'
                    fieldKey= 'symbol'
                    textFieldId= 'network-ticker'
                    onChange= {() => setStateWithValue('ticker')}
                    value= {ticker}
                    viewOnly={viewOnly}
                />
              {/* {renderFormTextField({
                className: 'add-network-form__network-form-row',
                fieldKey: 'chainId',
                textFieldId: 'chainId',
                onChange: setStateWithValue(
                  'chainId',
                  validateChainIdOnChange(rpcUrl),
                ),
                value: chainId,
                tooltipText: t('networkSettingsChainIdDescription'),
              })}
              {renderFormTextField({
                className: 'add-network-form__network-form-row',
                fieldKey: 'symbol',
                textFieldId: 'network-ticker',
                onChange: setStateWithValue('ticker'),
                value: ticker,
                optionalTextFieldKey: 'optionalCurrencySymbol',
              })} */}
            </div>
            <div className="add-network-form__form-row">
                <NetworkFormTextField
                    className= 'add-network-form__network-form-row'
                    fieldKey= 'blockExplorerUrl'
                    textFieldId= 'blockExplorerUrl'
                    onChange= { () => setStateWithValue(
                        'blockExplorerUrl',
                        validateBlockExplorerURL,
                      )}
                    value= {blockExplorerUrl}
                    viewOnly={viewOnly}
                />
              {/* {renderFormTextField({
                className: 'add-network-form__network-form-row',
                fieldKey: 'blockExplorerUrl',
                textFieldId: 'block-explorer-url',
                onChange: setStateWithValue(
                  'blockExplorerUrl',
                  validateBlockExplorerURL,
                ),
                value: blockExplorerUrl,
                optionalTextFieldKey: 'optionalBlockExplorerUrl',
              })} */}
            </div>
          </div>
          <div className="add-network-form__footer">
            <Button
              type="secondary"
              onClick={onCancel}
              className="add-network-form__footer-cancel-button"
            >
              {t('cancel')}
            </Button>
            <Button
              type="primary"
              disabled={isSubmitDisabled}
              onClick={onSubmit}
              className="add-network-form__footer-submit-button"
            >
              {t('save')}
            </Button>
          </div>
        </div>
      </div>
    );
}

AddNetworkForm.propTypes = {
    'renderFormTextField': PropTypes.func.isRequired,
    'setStateWithValue': PropTypes.func.isRequired,
    'validateUrlRpcUrl': PropTypes.func.isRequired,
    'validateChainIdOnChange': PropTypes.func.isRequired,
    'validateBlockExplorerURL': PropTypes.func.isRequired,
    'onCancel': PropTypes.func.isRequired,
    'onSubmit': PropTypes.func.isRequired,
    'rpcUrl': PropTypes.string,
    'chainId': PropTypes.string,
    'ticker': PropTypes.string,
    'networkName': PropTypes.string,
    'blockExplorerUrl': PropTypes.string,

};

export default AddNetworkForm;

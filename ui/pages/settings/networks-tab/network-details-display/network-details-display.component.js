import React from 'react';
import PropTypes from 'prop-types';
import { useI18nContext } from '../../../../hooks/useI18nContext';

const NetworkDetailsDisplay = ({
    // editRpc: PropTypes.func,
    // showConfirmDeleteNetworkModal: PropTypes.func,
    rpcUrl,
    chainId,
    ticker,
    viewOnly,
    networkName,
    // onClear: PropTypes.func,
    // setRpcTarget: PropTypes.func.isRequired,
    // isCurrentRpcTarget,
    blockExplorerUrl,
    // rpcPrefs: PropTypes.object,
    // networksToRender: PropTypes.array,
    // onAddNetwork: PropTypes.func,
    // setNewNetworkAdded: PropTypes.func,
    // addNewNetwork: PropTypes.bool,
}) => {

    const t = useI18nContext();
    return (
        <div className="networks-tab__network-form">
          {this.renderFormTextField({
            className: 'networks-tab__network-form-row',
            fieldKey: 'networkName',
            textFieldId: 'network-name',
            onChange: this.setStateWithValue('networkName'),
            value: networkName,
          })}
          {this.renderFormTextField({
            className: 'networks-tab__network-form-row',
            fieldKey: 'rpcUrl',
            textFieldId: 'rpc-url',
            onChange: this.setStateWithValue('rpcUrl', this.validateUrlRpcUrl),
            value: rpcUrl,
          })}
          {this.renderFormTextField({
            className: 'networks-tab__network-form-row',
            fieldKey: 'chainId',
            textFieldId: 'chainId',
            onChange: this.setStateWithValue(
              'chainId',
              this.validateChainIdOnChange.bind(this, rpcUrl),
            ),
            value: chainId,
            tooltipText: viewOnly ? null : t('networkSettingsChainIdDescription'),
          })}
          {this.renderFormTextField({
            className: 'networks-tab__network-form-row',
            fieldKey: 'symbol',
            textFieldId: 'network-ticker',
            onChange: this.setStateWithValue('ticker'),
            value: ticker,
            optionalTextFieldKey: 'optionalCurrencySymbol',
          })}
          {this.renderFormTextField({
            className: 'networks-tab__network-form-row',
            fieldKey: 'blockExplorerUrl',
            textFieldId: 'block-explorer-url',
            onChange: this.setStateWithValue(
              'blockExplorerUrl',
              this.validateBlockExplorerURL,
            ),
            value: blockExplorerUrl,
            optionalTextFieldKey: 'optionalBlockExplorerUrl',
          })}
          <div className="network-form__footer">
            {!viewOnly && (
              <>
                {deletable && (
                  <Button type="danger" onClick={this.onDelete}>
                    {t('delete')}
                  </Button>
                )}
                <Button
                  type="secondary"
                  onClick={this.onCancel}
                  disabled={this.stateIsUnchanged()}
                >
                  {t('cancel')}
                </Button>
                <Button
                  type="primary"
                  disabled={isSubmitDisabled}
                  onClick={this.onSubmit}
                >
                  {t('save')}
                </Button>
              </>
            )}
          </div>
        </div>
      );
}

NetworkDetailsDisplay.propTypes = {
    // editRpc: PropTypes.func,
    // showConfirmDeleteNetworkModal: PropTypes.func,
    'rpcUrl': PropTypes.string,
    'chainId': PropTypes.string,
    'ticker': PropTypes.string,
    'viewOnly': PropTypes.bool,
    'networkName': PropTypes.string,
    // onClear: PropTypes.func,
    // setRpcTarget: PropTypes.func.isRequired,
    'isCurrentRpcTarget': PropTypes.bool,
    'blockExplorerUrl': PropTypes.string,
    // rpcPrefs: PropTypes.object,
    // networksToRender: PropTypes.array,
    // onAddNetwork: PropTypes.func,
    // setNewNetworkAdded: PropTypes.func,
    // addNewNetwork: PropTypes.bool,
    'renderFormTextField': PropTypes.func.isRequired,
    'setStateWithValue': PropTypes.func.isRequired,
    'validateUrlRpcUrl': PropTypes.func.isRequired,
    'validateChainIdOnChange': PropTypes.func.isRequired,
    'validateBlockExplorerURL': PropTypes.func.isRequired,
    'onCancel': PropTypes.func.isRequired,
    'onSubmit': PropTypes.func.isRequired,

}

export default NetworkDetailsDisplay;
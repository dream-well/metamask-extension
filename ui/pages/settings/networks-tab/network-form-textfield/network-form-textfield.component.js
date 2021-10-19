import React from 'react';
import PropTypes from 'prop-types';
import { useI18nContext } from '../../../../hooks/useI18nContext';

const NetworkFormTextField = ({
    className,
    fieldKey,
    textFieldId,
    onChange,
    value,
    optionalTextFieldKey,
    tooltipText,
    autoFocus = false,
    errors,
    viewOnly,
}) => {
    const errorMessage = errors[fieldKey]?.msg || '';
    const t = useI18nContext();
    return (
        <div className={className}>
          <div className="networks-tab__network-form-label">
            <div className="networks-tab__network-form-label-text">
              {t(optionalTextFieldKey || fieldKey)}
            </div>
            {!viewOnly && tooltipText ? (
              <Tooltip
                position="top"
                title={tooltipText}
                wrapperClassName="networks-tab__network-form-label-tooltip"
              >
                <i className="fa fa-info-circle" />
              </Tooltip>
            ) : null}
          </div>
          <TextField
            type="text"
            id={textFieldId}
            onChange={onChange}
            fullWidth
            margin="dense"
            value={value}
            disabled={viewOnly}
            error={errorMessage}
            autoFocus={autoFocus}
          />
        </div>
      );
}

NetworkFormTextField.propTypes = {
    'className': PropTypes.string,
    'fieldKey': PropTypes.string,
    'textFieldId': PropTypes.string,
    'onChange': PropTypes.func.isRequired,
    'value': PropTypes.string,
    'optionalTextFieldKey': PropTypes.string,
    'tooltipText': PropTypes.string,
    'autoFocus': PropTypes.bool,
    'errors': PropTypes.object,
    'viewOnly': PropTypes.bool,
};

NetworkFormTextField.defaultProps = {
    autoFocus: false,
}

export default NetworkFormTextField;
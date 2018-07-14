import { TranslationFunction } from 'i18next';
import * as React from 'react';
import { FormGroup, FormGroupProps, Input } from 'reactstrap';
import { withText, WithTextProps } from '../../i18next';

export interface LanguageDropdownState {
  options: Array<{ value: string; label: string }>;
}

export interface LanguageDropdownProps extends WithTextProps, FormGroupProps {
  label: string;
}

class LanguageDropdown extends React.Component<LanguageDropdownProps, LanguageDropdownState> {
  state = {
    options: [{ value: 'en', label: 'English' }, { value: 'cimode', label: 'Keys' }]
  };

  setLanguage = (e: any) => {
    this.props.i18n.changeLanguage(e.target.value);
  };

  render() {
    const { ref, label, i18n, t, ready, ...rest } = this.props;
    return (
      <FormGroup {...rest} inline={true}>
        {/* <Label for="languageSelect">{this.props.label}</Label> */}
        <Input
          type="select"
          name="language"
          id="languageSelect"
          value={this.props.i18n.language}
          onChange={this.setLanguage}
        >
          {this.state.options.map((lng, i) => (
            <option key={lng.value} value={lng.value}>
              {lng.label}
            </option>
          ))}
        </Input>
      </FormGroup>
    );
  }
}

const mapText = (t: TranslationFunction) => ({ label: t('common:labels:selectLanguage') });

export default withText(mapText)(LanguageDropdown) as React.SFC<FormGroupProps>;

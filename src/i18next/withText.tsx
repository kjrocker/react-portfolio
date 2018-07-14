import { i18n as i18nInterface, TranslationFunction } from 'i18next';
import * as React from 'react';
import { I18n } from 'react-i18next';
import { i18nProps } from 'react-i18next/src/I18n';

const defaultOptions = {};

type Omit<T, K> = Pick<T, Exclude<keyof T, K>>;

export interface WithTextProps {
  i18n: i18nInterface;
  t: TranslationFunction;
  ready: boolean;
}

const withText = <R extends object>(fn: (t: TranslationFunction, props?: object) => R, args?: Partial<i18nProps>) => {
  const extraProps = Object.assign({}, defaultOptions, args);
  return <P extends object>(BaseComponent: React.ComponentType<P>) => {
    return (props: Omit<P, keyof WithTextProps | keyof R>) => {
      return (
        <I18n {...extraProps}>
          {(t, other) => {
            const tProps = fn(t, props);
            return <BaseComponent {...other} {...tProps} {...props} />;
          }}
        </I18n>
      );
    };
  };
};

export default withText;

import React from 'react';
import styled from 'styled-components';
import { useStaticQuery, graphql } from 'gatsby';
// import _ from 'lodash';

import { Module } from '../layouts';
import { COLORS, SPACING, TYPOGRAPHY } from '../constants';
import { Button } from '../components';

import { SettingYamlQuery } from '@/types';

type SelectOption = {
  label: string;
  id: string;
};

export const ContactModule: React.FC = () => {
  const data: SettingYamlQuery = useStaticQuery(graphql`
    query SettingYaml {
      settingYaml {
        moduleInfo {
          contact {
            selectOptions {
              id
              label
            }
          }
        }
      }
    }
  `);

  const selectOptionsBase = data.settingYaml?.moduleInfo?.contact?.selectOptions;

  const selectOptions: SelectOption[] = selectOptionsBase
    ? (selectOptionsBase as SelectOption[])
    : [];

  return (
    <Module title="コンタクト">
      <form>
        <FormControl as="select" name="" id="">
          <option hidden>聞きたいことを選択</option>
          {selectOptions.map(({ id, label }) => (
            <option key={id} value={id}>
              {label}
            </option>
          ))}
        </FormControl>
        <FormControl
          as="textarea"
          placeholder="お問い合わせ内容"
          name=""
          id=""
          cols={30}
          rows={10}
        />
        <FormControl as="input" type="email" placeholder="メールアドレス" />
        <Button as="button" type="submit">
          テスト
        </Button>
      </form>
    </Module>
  );
};

const FormControl = styled.div`
  display: block;
  width: 100%;
  padding: ${SPACING.MIDDLE}px;
  appearance: none;
  border: none;
  border-bottom: 1px solid ${COLORS.UI_TEXT_MAIL};
  border-radius: 0;
  outline: none;
  background: none;
  ${TYPOGRAPHY.MIXIN.BASE}
`;

// const TextInput = styled.input`
//   padding: 0;
//   border: none;
//   border-radius: 0;
//   outline: none;
//   background: none;
//   font-size: 12px;
// `;

export default ContactModule;

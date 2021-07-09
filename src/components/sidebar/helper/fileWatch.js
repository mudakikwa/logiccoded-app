/* eslint-disable no-restricted-syntax */
/* eslint-disable no-console */
/* eslint-disable import/prefer-default-export */
import gql from 'graphql-tag';
import { queryData } from '../../../helper/graphqlSender';

const chokidar = require('chokidar');
const lineReader = require('line-reader');
const replace = require('replace-in-file');

const path = require('path');

const fs = window.require('fs');

const file = [];

export const watcher = (folder, mutation) => {
  chokidar.watch(folder).on('all', (event, path) => {
    // console.log(`${file} have been ${event}`);
    if (event === 'change') {
      lineReader.eachLine(path, async (line) => {
        try {
          if (line.includes('##')) {
            const response = await mutation({
              variables: {
                title: 'Connection to database',
                userId: 'ktestt',
              },
            });
            console.log(line, response.data.CallCode.code);
            if (response.data.CallCode.code instanceof String) {
              const options = {
                files: path,
                from: line,
                to: response.data.CallCode.code,
              };
              const results = await replace(options);
              console.log('Replacement results:', results);
            }
          }
        } catch (e) {
          console.log(e);
        }
      });
    }
  });
};

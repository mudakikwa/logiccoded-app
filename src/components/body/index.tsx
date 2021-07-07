import React, { useEffect, useState } from 'react';
import { useQuery, gql } from '@apollo/client';
import Python from './src/python.png';
import CheckSquare from './src/check-square.svg';
import ReactIcon from './src/react.svg';
import Django from './src/django.svg';
import boostrap from './src/boostrap.svg';
import vue from './src/vue.svg';
import ruby from './src/ruby.svg';
import js from './src/javascript.svg';

import QuickFeutures from './quickFeutures/index';

import './index.scss';

export default function Body() {
  const QUERY = gql`
    query {
      AllQueredCode {
        title
        description
        code
        language
      }
    }
  `;
  const { loading, error, data } = useQuery(QUERY);
  if (loading) return <h1>Loading</h1>;
  if (error) return <h1>error</h1>;
  if (!data) return <h1>data not found</h1>;
  return (
    <div className="col-md-11" id="body">
      <div className="row mx-0 px-0">
        <div className="col-md-8 ">
          <h4 className="mx-0 px-0">Rendered codes</h4>
          <div className="code-indicator">
            {data.AllQueredCode &&
              data.AllQueredCode.map((singleData, count) => {
                return (
                  <div className="row mx-0 code-card" key="">
                    <div className="col-md-2 px-0 icon">
                      <div className="coding-icon">
                        {singleData.language === 'js' && (
                          <img src={js} alt="" />
                        )}
                      </div>
                    </div>
                    <div className="col-md-10 px-0">
                      <div className="row d-flex justify-content-between mx-0 px-0">
                        <div className="col-md-9 px-0">
                          <h5 className="title">{singleData.title}</h5>
                        </div>
                        <div className="col-md-3 px-0 d-flex justify-content-end">
                          <img src={CheckSquare} alt="" className="status" />
                        </div>
                      </div>
                      <div className="row mx-0 px-0">
                        <h6 className="px-0 mx-0 description">
                          {singleData.description}
                        </h6>
                      </div>
                      <div className="row d-flex justify-content-between mx-0 px-0">
                        <div className="col-md-6 d-flex justify-content-start px-0" />
                        <div>
                          <h1 className="numbering">
                            {(count + 1).toLocaleString('en-US', {
                              minimumIntegerDigits: 2,
                              useGrouping: false,
                            })}
                          </h1>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
        <div className="col-md-4">
          <QuickFeutures />
        </div>
      </div>
    </div>
  );
}

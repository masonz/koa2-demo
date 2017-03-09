'use strict';

import './style.css'
import React from 'react'
import { Link } from 'react-router'

export default class NotFoundPage extends React.Component {
    render() {
        return (
            <div class="wrapper row2">
                <div id="container" class="clear">
                    <div id="fof" class="clear">
                        <div class="positioned">
                            <div class="hgroup clear">
                                <h1>404</h1>
                                <h2>Error - Sorry Something Went Wrong !</h2>
                            </div>
                            <p>For Some Reason The Page You Requested Could Not Be Found On Our Server</p>
                        </div>
                        <p class="clear">
                            <a class="go-back" href="javascript:history.go(-1)">« Go Back</a>
                            <a class="go-home" href="#">Go Home »</a>
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}
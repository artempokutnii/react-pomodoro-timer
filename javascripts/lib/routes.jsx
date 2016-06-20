'use strict';

import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import Timer from 'views/components/timer';
import Layout from 'views/layout/layout';
import Notfound from 'views/errors/not_found';

const routes =
	<Router history={ hashHistory }>
		<Route path='/' component={ Layout }>
			<IndexRoute component={ Timer } />
			<Route path="*" component={ Notfound } />
		</Route>
	</Router>;

export default routes
import React from 'react';
import useBreadcrumbs from 'use-react-router-breadcrumbs';
import * as Styled from './style';

function Breadcrumb() {
	const breadcrumbs = useBreadcrumbs();

	return (
		<>
			{breadcrumbs.map(({breadcrumb, match}, index) => (
				<span key={match.pathname}>
					{index !== 0 && <Styled.Separator dangerouslySetInnerHTML={{__html: '&#47;'}} />}
					<Styled.BCLink to={match.pathname}>{breadcrumb}</Styled.BCLink>
					{console.log(match.pathname)}
				</span>
			))}
		</>
	);
}

export default Breadcrumb;

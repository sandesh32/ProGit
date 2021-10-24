import React from "react";

export const Showdet = props => {
	const { repos } = props;
	console.log(props.data);
	//console.log(repos.data);
	// const repolist = <h1>Hi</h1>;
	// for(let i=0;i<repos.data.length;i++){
	//     console.log(repos.data[i].name);
	// }
	//   const repolist = repos.data.length===0? <li>Not Matching</li> : repos.data.map((item)=>{
	//       return <li><a href={item.html_url}>{item.name}</a></li>
	//   });
	if (repos.data === undefined) {
		return <>Load Again</>;
	} else {
		const repolist = repos.data.map(item => {
			return (
				<li key={item.id}>
					<a href={item.html_url}>{item.name}</a>
				</li>
			);
		});
		var source = `https://avatars.githubusercontent.com/${props.naming}`;
		var hr = `https://github.com/${props.naming}`;
		//document.getElementById("x").src=source;
		return (
			<>
				<div className='avatar'>
					<img src={source} alt='User' />
				</div>
				<h3>Public Repos of </h3>
				<a className='user' href={hr}>
					{props.naming}
				</a>
				<br />
				<ul>{repolist}</ul>
			</>
		);
	}
};

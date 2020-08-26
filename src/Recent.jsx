import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Page from './Page';

const Recent = () => {
	const [posts, setPosts] = useState([]);
	const [loading, setLoading] = useState(false);
	const [currentPage, setCurrentPage] = useState(1);
	const [postsPerPage, setPostsPerPage] = useState(10);

	useEffect(() => {
		const fetchPosts = async () => {
			setLoading(true);
			const res = await axios.get('https://api.spacexdata.com/v3/payloads');
			setPosts(res.data);
			setLoading(false);
		};
		fetchPosts();
	}, []);

	const indexOfLastPost = currentPage * postsPerPage;
	const indexOfFirstPost = indexOfLastPost - postsPerPage;
	const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

	const paginate = pageNumber => setCurrentPage(pageNumber);

	return (
		<>
			<div className='container'>
				{currentPosts.map((post, index) => (
					<>
						<div className='card'>
							<div className='content'>
								<h6>{post.payload_id}</h6>
								<h6>{post.customers}</h6>
								<h6>{post.nationality}</h6>
								<h6>{post.manufacturer}</h6>
								<h6>{post.payload_type}</h6>
								<h6>{post.payload_mass_kg}</h6>
								<h6>{post.payload_mass_lbs}</h6>
								<br />
							</div>
						</div>
					</>
				))}
				<br />
				<Page
					postPerPage={postsPerPage}
					totalPosts={posts.length}
					paginate={paginate}
				/>
			</div>
		</>
	);
};
export default Recent;

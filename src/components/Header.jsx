import CoverImage from '../images/cover-image.jpg'
import ProfileImage from '../images/profile-image.jpg'
import { FaTwitter, FaGithub } from 'react-icons/fa';

export const Header = () => {
	return (
		<header className='main-cover' style={{backgroundImage:`url(${CoverImage})`}}>
			<div className='overlay'></div>
			<div className='container'>
				<div className='display-table'>
					<div className='display-table-contents'>
						{/* カバー画像 */}
						<div className='profile-thumb' style={{backgroundImage: `url(${ProfileImage})`}}></div>
						{/* 名前と肩書き */}
						<h1 className='title-text'>Yuto Wachi</h1>
						<h3 className='title-text'>Mashine Learning Engineer</h3>
						<ul className='social-icons'>
							<li className='icon-link'>
								<a href="https://twitter.com">
									<FaTwitter color='white' size='2em' />
								</a>
							</li>
							<li className='icon-link'>
								<a href="https://github.com/yutowac?tab=repositories">
									<FaGithub color='white' size='2em' />
								</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</header>
	);
};

import CoverImage from '../images/cover-image.jpg'
import ProfileImage from '../images/profile-image.jpg'
import { FaTwitter, FaGithub, FaLinkedin } from 'react-icons/fa';
import { GiDonut } from 'react-icons/gi';


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
								<a href="https://www.linkedin.com/in/wachi-yuto-b43ab3a2/" target="_blank">
									<FaLinkedin color='white' size='2em' />
								</a>
							</li>
							<li className='icon-link'>
								<a href="https://twitter.com" target="_blank">
									<FaTwitter color='white' size='2em' />
								</a>
							</li>
							<li className='icon-link'>
								<a href="https://github.com/yutowac?tab=repositories" target="_blank">
									<FaGithub color='white' size='2em' />
								</a>
							</li>
							<li className='icon-link'>
								<a href="https://cocky-hawking-db8648.netlify.app/">
									<GiDonut color='white' size='2em' />
								</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</header>
	);
};

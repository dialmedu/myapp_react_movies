import React from 'react';
import '../css/menu.css';

export default function PageNav() {
	return (
		<nav className="dm_layout_panel__side menu_side scroll-bar">
			<div className="menu_side__user user">
				<div className="row-fluid container-fluid">
					<div className="col col-sm-4">
						<figure className="user__nick">
							<img
								className="user__image"
								src="https://scontent.flim5-1.fna.fbcdn.net/v/t1.0-1/p50x50/14650767_10210026801883933_3966813777894458301_n.jpg?oh=85fbbea3cf8436b2330534da20985104&oe=59FF831D"
								alt="profile"
							/>
							<span className="user__messages">24</span>
						</figure>
					</div>
					<div className="col col-sm-8">
						<h2 className="user_name">Hi, Pepito</h2>
					</div>
				</div>
			</div>
			<ul className="menu_side__options">
				<li className="menu__item menu__item--counter">
					<button className="menu__link">
						My Collection
					</button>
					<span className="menu__counter">98</span>
				</li>
				<li className="menu__item">
					<button className="menu__link menu__link--select">
						Trending Movies
					</button>
				</li>
				<li className="menu__item">
					<button className="menu__link">
						History
					</button>
				</li>
				<li className="menu__item menu__item--counter">
					<button className="menu__link">
						New Movies
					</button>
					<span className="menu__counter">32</span>
				</li>
				<li className="menu__item menu__item--counter">
					<button className="menu__link">
						Subscriptions
					</button>
					<span className="menu__counter">86</span>
				</li>
				<hr className="menu_side__separator" />
				<li className="menu__item">
					<button className="menu__link">
						Recommendations
					</button>
				</li>
				<li className="menu__item">
					<button className="menu__link">
						Top Genres
					</button>
				</li>
				<li className="menu__item">
					<button className="menu__link">
						Artist of the Months
					</button>
				</li>
				<li className="menu__item">
					<button className="menu__link">
						Quote of the Week
					</button>
				</li>
			</ul>
		</nav>
	);
}


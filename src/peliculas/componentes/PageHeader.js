import React, {useState} from 'react';

const PageHeader = ({title}) => {
	const [showSearch, setShowSearch] = useState(false);
	const [textSearch, setTextSearch] = useState('');
	const handleSearchClick = () => {
		setShowSearch(!showSearch);
	}
	const handleSearchChange = (e) => {
		setTextSearch(e.target.value);
	}
	return (
		<header className="dm_layout_panel__menu menu dm_theme_menu">
			<div className="row-fluid">
				<div className="col col-sm-8">
					<h1 className="menu__title">{title}</h1>
				</div>
				<div className="col col-sm-4">
					<div className="menu__options">
						<button className="btn menu__btn_search" onClick={handleSearchClick}>
							<i className="glyphicon glyphicon-search"></i>
						</button>
						{showSearch && <input className="menu__search_input" type="text" value={textSearch} onChange={handleSearchChange} placeholder="Search..."/>}
					</div>
				</div>
			</div>
		</header>
	);
};

export default PageHeader;


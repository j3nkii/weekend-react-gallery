CREATE TABLE gallery (
	id SERIAL PRIMARY KEY,
	path VARCHAR(245) NOT NULL,
	description VARCHAR(245) NOT NULL,
	likes INTEGER DEFAULT 0
);

INSERT INTO gallery 
	(path, description)
VALUES
	('https://images2.minutemediacdn.com/image/upload/c_crop,h_843,w_1500,x_0,y_10/v1555172614/shape/mentalfloss/iStock-177369626_1.jpg?itok=YfyNMOBR', 'cutest fucking goat, maybe even ever.'),
	('https://www.lollypop.org/wp-content/uploads/2018/01/Blg_Photo-2.jpg', 'cutest fucking goat, maybe even ever.'),
	('https://www.zarebasystems.com/media/Articles/Zareba/get-to-know-the-pygmy-goat.jpg', 'cutest fucking goat, maybe even ever.'),
	('https://images.squarespace-cdn.com/content/v1/5bf817f731d4df96adf0ad5c/1593719945907-1EHOBVFPA9PIMWUB8IE4/goats-2.JPG', 'cutest fucking goat, maybe even ever.'),
	('https://static.wixstatic.com/media/60feb8_41568af21cb74d3cb47291fa821fb45b~mv2.jpg/v1/fill/w_320,h_427,q_90/60feb8_41568af21cb74d3cb47291fa821fb45b~mv2.jpg', 'cutest fucking goat, maybe even ever.'),
	('https://wp-cpr.s3.amazonaws.com/uploads/2019/07/411967988_755940691.jpg?w=300', 'cutest fucking goat, maybe even ever.'),
	('https://i.pinimg.com/originals/9f/93/a1/9f93a155e6b8a1db0bd814db72a099ba.jpg', 'cutest fucking goat, maybe even ever.'),
	('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHvhEHo2FnaT7-ufoOVzHeG-IzT86eJyHIJg&usqp=CAU', 'cutest fucking goat, maybe even ever.'),
	('https://i.pinimg.com/originals/b9/18/48/b91848b5ab477b0b57c0685236f0b272.jpg', 'cutest fucking goat, maybe even ever.'),
	('https://images2.minutemediacdn.com/image/upload/c_crop,h_843,w_1500,x_0,y_10/v1555172614/shape/mentalfloss/iStock-177369626_1.jpg?itok=YfyNMOBR', 'cutest fucking goat, maybe even ever.'),
	('https://static.wixstatic.com/media/2ca758_441a22c040714494bbe500005f95c308~mv2.jpg/v1/fill/w_720,h_960,al_c,q_85/2ca758_441a22c040714494bbe500005f95c308~mv2.jpg', 'cutest fucking goat, maybe even ever.'),
	('https://static.wixstatic.com/media/d6f479_5f109c6499c9442cbc683dd9dfd3fe3f~mv2.jpg/v1/fill/w_640,h_400,al_c,q_80,usm_0.66_1.00_0.01/d6f479_5f109c6499c9442cbc683dd9dfd3fe3f~mv2.webp', 'cutest fucking goat, maybe even ever.');
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
	('https://images.squarespace-cdn.com/content/v1/5bf817f731d4df96adf0ad5c/1593719945907-1EHOBVFPA9PIMWUB8IE4/goats-2.JPG', 'cutest fucking goat, maybe even ever.');
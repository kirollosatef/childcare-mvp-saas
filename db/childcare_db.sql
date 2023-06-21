CREATE TABLE childcare.user_type (
  user_type_id serial NOT NULL,
  user_type_name VARCHAR(50) NOT NULL,
  user_type_code VARCHAR(50) NOT NULL UNIQUE,
  created_on TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  created_by VARCHAR(50) NOT NULL,
  PRIMARY KEY (user_type_id)
);
CREATE TABLE childcaredb.users (
  user_id serial NOT NULL,
  username VARCHAR(50) NOT NULL UNIQUE,
  password VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL UNIQUE,
  fullname VARCHAR(255) NOT NULL,
  mobile_number VARCHAR(20) NOT NULL,
  user_type_code VARCHAR(10) NOT NULL REFERENCES childcare.user_type(user_type_code),
  created_on TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  created_by VARCHAR(50) NOT NULL,
  update_on TIMESTAMP DEFAULT NULL,
  update_by VARCHAR(50) DEFAULT NULL,
  PRIMARY KEY (user_id)
);
CREATE TABLE childcaredb.location (
  location_id serial NOT NULL,
  address VARCHAR(255) NOT NULL,
  city VARCHAR(100) NOT NULL,
  created_on TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  created_by VARCHAR(50) NOT NULL,
  update_on TIMESTAMP DEFAULT NULL,
  update_by VARCHAR(50) DEFAULT NULL,
  PRIMARY KEY (location_id)
);
CREATE TABLE childcaredb.availability (
  availability_id serial NOT NULL,
  caregiver_id INT NOT NULL,
  start_time TIME NOT NULL,
  end_time TIME NOT NULL,
  day_of_week VARCHAR(10) NOT NULL,
  created_on TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  created_by VARCHAR(50) NOT NULL,
  update_on TIMESTAMP DEFAULT NULL,
  update_by VARCHAR(50) DEFAULT NULL,
  PRIMARY KEY (availability_id) -- FOREIGN KEY (caregiver_id) REFERENCES childcaredb.caregiver(caregiver_id)
);
CREATE TABLE childcaredb.caregiver (
  caregiver_id serial NOT NULL,
  caregiver_name VARCHAR(255) NOT NULL,
  caregiver_description VARCHAR(255),
  caregiver_mobile_number VARCHAR(20) NOT NULL,
  hourly_rate DECIMAL(10, 2),
  availability_id INT NOT NULL,
  user_id INT NOT NULL,
  location_id INT NOT NULL,
  created_on TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  created_by VARCHAR(50) NOT NULL,
  update_on TIMESTAMP DEFAULT NULL,
  update_by VARCHAR(50) DEFAULT NULL,
  PRIMARY KEY (caregiver_id)
  FOREIGN KEY (user_id) REFERENCES childcaredb.users(user_id),
  FOREIGN KEY (location_id) REFERENCES childcaredb.location(location_id)
  FOREIGN KEY (availability_id) REFERENCES childcaredb.availability(availability_id)
);
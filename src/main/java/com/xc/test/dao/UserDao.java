package com.xc.test.dao;

import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.stereotype.Repository;

import com.xc.test.model.Person;
import com.xc.test.model.User;

@Repository
public class UserDao extends MongodbBaseDao<User>{

	@Override
	protected Class<User> getEntityClass() {
		// TODO Auto-generated method stub
		return User.class;
	}

	public void insert(User user) {
		getMongoTemplate().insert(user, "users");
	}
	
	public User findOne(String username,String password) {
		Query query = new Query(Criteria.where("username").is(username).where("password").is(password));
		User user = getMongoTemplate().findOne(query, this.getEntityClass(),"user");
		return user;   
	}
	

}

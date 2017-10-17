package com.xc.test.dao;

import java.util.List;
import java.util.regex.Pattern;

import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.data.mongodb.core.query.Update;
import org.springframework.stereotype.Repository;
import org.springframework.util.StringUtils;

import com.mongodb.WriteResult;
import com.xc.test.model.Person;
import com.xc.test.model.User;
import com.xc.test.object.Pagination;

@Repository
public class PersonDao extends MongodbBaseDao<Person> {

	public void insert(Person person) {
		getMongoTemplate().insert(person, "person");
	}

	public void removeOneByName(String name) {  
        Query query = new Query(Criteria.where("name").is(name)); 
        Person p = getMongoTemplate().findAndRemove(query, this.getEntityClass(),"person");  
	}
	
	public void removeAllByName(String name) {   
        Query query = new Query(Criteria.where("name").is(name));   
        List<Person> pList = getMongoTemplate().findAllAndRemove(query, this.getEntityClass(),"person");   
	}
	
	public void removeAll() {
		List<Person> list = this.findAll();   
        if(list != null){   
            for(Person person : list){   
                getMongoTemplate().remove(person,"person");   
            }   
        }   
	}
	
	public void updateFirst(Person p) {
		if(StringUtils.isEmpty(p.getName())){
	            return;
	    }
	    Query query = new Query(Criteria.where("name").is(p.getName()));
	    Update update = new Update();
        if(p.getAge()!= 0){
            update.set("age", p.getAge());
        }
        if(!StringUtils.isEmpty(p.getSex())){
            update.set("sex", p.getSex());
        }
        if(!StringUtils.isEmpty(p.getNativePlace())){
            update.set("nativePlace", p.getNativePlace());
        }
	    WriteResult wr = getMongoTemplate().updateFirst(query, update, this.getEntityClass(),"person"); 	
	}

	public void updateMulti(Person p) {
	    Query query = new Query(Criteria.where("name").is(p.getName()));
	    Update update = new Update();
        if(p.getAge()!= 0){
            update.set("age", p.getAge());
        }
        if(!StringUtils.isEmpty(p.getSex())){
            update.set("sex", p.getSex());
        }
        if(!StringUtils.isEmpty(p.getNativePlace())){
            update.set("nativePlace", p.getNativePlace());
        }
	    WriteResult wr = getMongoTemplate().updateMulti(query, update, this.getEntityClass(),"person"); 	
	}
	
	public List<Person> findAll() {
		return getMongoTemplate().find(new Query(), this.getEntityClass());   
	}

	public List<Person> findByRegex(String regex) {
		 Pattern pattern = Pattern.compile(regex,Pattern.CASE_INSENSITIVE);   
	      Criteria criteria = new Criteria("name").regex(pattern.toString()); 
	      //long totalCount = this.mongoTemplate.count(new Query(criteria), Person.class); 
	      //System.out.println(totalCount);
	        return getMongoTemplate().find(new Query(criteria), this.getEntityClass(),"person");   

	}

	public Person findOneByName(String name) {
		//Person user = getMongoTemplate().findOne(new Query(Criteria.where("name").is(name)), Person.class,"person");
		//User user2 = getMongoTemplate().findOne(new Query(Criteria.where("username").is(name)), User.class,"user");
		 return getMongoTemplate().findOne(new Query(Criteria.where("name").is(name)), this.getEntityClass(),"person");   
	}

	@Override
	protected Class<Person> getEntityClass() {
		// TODO Auto-generated method stub
		return Person.class;
	}

}

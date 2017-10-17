package com.xc.test.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;

import com.xc.test.dao.PersonDao;
import com.xc.test.model.Person;

@Service
public class PersonService extends BaseService{
	
	//可以对成员变量、方法和构造函数进行标注，来完成自动装配的工作
	@Autowired
	@Qualifier("personDao")
	private PersonDao pr ;

	public void insertPerson(Person person) {
		pr.insert(person);
	}

	public Person queryOne(String name) {
		return pr.findOneByName(name);
	}
	
	public List<Person> queryByRegex(String name) {
		return pr.findByRegex(name);
	}
}

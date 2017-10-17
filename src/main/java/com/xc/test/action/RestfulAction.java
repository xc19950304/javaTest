package com.xc.test.action;

import java.io.IOException;

import org.codehaus.jackson.JsonGenerationException;
import org.codehaus.jackson.map.JsonMappingException;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.xc.test.dao.PersonDao;
import com.xc.test.model.Person;
import com.xc.test.service.PersonService;
import com.xc.test.utils.SpringContextHolder;

/**
 * 
 * @author boldness-xc
 * @function 用于测试springmvc是否能支持restful风格来访问和请求资源
 *
 */
@RestController
@RequestMapping(value = "/personTable")
public class RestfulAction {
	
	private PersonService prService = (PersonService)SpringContextHolder.getBean("personService");

	
	@RequestMapping(value = "/{name}", method = RequestMethod.GET/*, produces = MediaType.APPLICATION_JSON_VALUE*/)
	public ResponseEntity<Person> testRestfulGet(@PathVariable("name") String name) throws JsonGenerationException, JsonMappingException, IOException{
		System.out.println("1111");
		Person p = prService.queryOne(name);
		//SpringMVC返回json格式对象一种方式，同时可以定义Http头和HttpStatus
		HttpHeaders headers = new HttpHeaders();
		headers.setContentType(MediaType.TEXT_PLAIN);
		return new ResponseEntity<Person>(p,headers, HttpStatus.OK);
		//return new ResponseEntity<Person>(headers, HttpStatus.OK);
	}

}
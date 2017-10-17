package com.xc.test.action;

import java.io.IOException;
import java.net.URLDecoder;
import java.net.URLEncoder;
import java.util.List;

import org.codehaus.jackson.JsonGenerationException;
import org.codehaus.jackson.map.JsonMappingException;
import org.codehaus.jackson.map.ObjectMapper;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.mongodb.util.JSON;
import com.xc.test.dao.PersonDao;
import com.xc.test.model.Person;
import com.xc.test.service.PersonService;
import com.xc.test.utils.SpringContextHolder;
import com.xc.test.webService.soapInterface;

@Controller
@RequestMapping("/html/PersonAction.do")
public class PersonAction {
	
	private PersonService prService = (PersonService)SpringContextHolder.getBean("personService");
	
	@RequestMapping(params = "action=addData",method=RequestMethod.POST)
	@ResponseBody
	public String saveTODB(Person p) throws JsonGenerationException, JsonMappingException, IOException {
		prService.insertPerson(p);
		ObjectMapper mapper = new ObjectMapper(); 
		String json = mapper.writeValueAsString(p); 
		return json;
	}
	
	public void delete(String name){
		
	}
	
	public void deleteAll(String name){
		
	}
	
	public void updateOne(Person p){
		
	}
	
	public void updateMulti(Person p){
		
	}
	
	@RequestMapping(params = "action=queryData",method=RequestMethod.GET)
	@ResponseBody
	public String query(String name) throws JsonGenerationException, JsonMappingException, IOException{
		Person p = prService.queryOne(name);
		ObjectMapper mapper = new ObjectMapper(); 
		String json = mapper.writeValueAsString(p); 
		return json;
	}
	
	@RequestMapping(params = "action=queryDataRegex",method=RequestMethod.GET)
	@ResponseBody
	public String queryRegex(String name) throws JsonGenerationException, JsonMappingException, IOException{
		List<Person> pList = prService.queryByRegex(name);
		ObjectMapper mapper = new ObjectMapper(); 
		String json = mapper.writeValueAsString(pList); 
		return json;
	}
	
	@RequestMapping(params = "action=webServiceInvoking",method=RequestMethod.POST /*,produces={"text/html;charset=UTF-8"}*/)
	@ResponseBody
	public String webServiceInvoking(String name) throws JsonGenerationException, JsonMappingException, IOException{
		System.out.println("111");
		soapInterface ts = SpringContextHolder.getBean("testWebServiceClient");
		String text = ts.sayHi(name);
		text = URLEncoder.encode(text, "UTF-8");
		ObjectMapper mapper = new ObjectMapper(); 
		String json = mapper.writeValueAsString(text); 
		return json;
	}
	
 
	public void test(){
		System.out.println("111");

	}
}

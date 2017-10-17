package com.xc.test.webService;

import java.io.IOException;

import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;

import org.codehaus.jackson.JsonGenerationException;
import org.codehaus.jackson.map.JsonMappingException;
import org.codehaus.jackson.map.ObjectMapper;

import com.xc.test.dao.PersonDao;
import com.xc.test.model.Person;
import com.xc.test.utils.SpringContextHolder;

@Path("/person")
//@Produces("application/json")  
public class restfulService implements restfulInterface {
	
	private PersonDao pr = (PersonDao) SpringContextHolder.getBean("personDao");
    @GET
    @Path("/{name}")
    //@Produces("application/json")
   // @Consumes("application/xml")  
    //consumes
    //produces
    public String testRestfulGet(@PathParam("name")String name) throws JsonGenerationException, JsonMappingException, IOException{
		System.out.println("222");
		Person p = pr.findOneByName(name);
		ObjectMapper mapper = new ObjectMapper(); 
		String json = mapper.writeValueAsString(p);
		return json;
	}
}

package com.xc.test.webService;

import java.io.IOException;

import javax.ws.rs.PathParam;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;

import org.codehaus.jackson.JsonGenerationException;
import org.codehaus.jackson.map.JsonMappingException;
import org.springframework.http.ResponseEntity;

import com.xc.test.model.Person;

@Path("/person")
public interface restfulInterface {
	 	@GET
	    @Path("/{name}")
	    public String testRestfulGet(@PathParam("name") String name) throws JsonGenerationException, JsonMappingException, IOException;

}

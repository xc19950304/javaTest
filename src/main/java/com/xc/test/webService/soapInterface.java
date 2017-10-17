package com.xc.test.webService;

import javax.jws.WebMethod;
import javax.jws.WebService;

@WebService  
public interface soapInterface {
	@WebMethod 
	String sayHi(String name); 
}

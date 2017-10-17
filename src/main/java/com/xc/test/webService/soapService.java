package com.xc.test.webService;

import java.util.Date;

import javax.jws.WebMethod;
import javax.jws.WebService;

@WebService(endpointInterface="com.xc.test.webService.soapInterface",serviceName="soapService")//鎸囧畾webservice鎵�瀹炵幇鐨勬帴鍙ｄ互鍙婃湇鍔″悕绉�
public class soapService implements soapInterface{
	@WebMethod  
    public String sayHello(String message){  
        return "Hello ," + message;  
    }
	
	@Override
	public String sayHi(String name) {
		return name+"你好"+new Date();
	}  


}
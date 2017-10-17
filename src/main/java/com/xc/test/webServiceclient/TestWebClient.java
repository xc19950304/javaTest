package com.xc.test.webServiceclient;

import java.rmi.RemoteException;

import javax.xml.rpc.ServiceException;

import org.apache.cxf.jaxws.JaxWsProxyFactoryBean;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;
import org.springframework.web.client.RestTemplate;

import com.xc.test.webService.soapInterface;

public class TestWebClient {
	public static void main(String args[]) throws ServiceException, RemoteException
	{		
		//通过factory来调用soapWebServcice
		JaxWsProxyFactoryBean factory = new JaxWsProxyFactoryBean();
        factory.setServiceClass(soapInterface.class);
        factory.setAddress("http://localhost:8081/springMVCAndMongodbTest/webServices//soapService/");        
        soapInterface service = (soapInterface) factory.create();
        
        //通过ServiceClient.xml来调用soapWebServcice
        ApplicationContext ctx = new ClassPathXmlApplicationContext("serviceClient.xml");   
        soapInterface service2 = ctx.getBean("testWebServiceClient", soapInterface.class);
        
        String tx = service2.sayHi("xc");
        System.out.println(tx);
        
        //来调用restFulWebServcice
        String name = "3213";
        String url = "http://localhost:8081/springMVCAndMongodbTest/webServices/restService/";
        RestTemplate restTemplate = new RestTemplate();
        String rs =  restTemplate.getForObject(url + "person/{name}", String.class, name);
        System.out.println(rs);
                
	}

}

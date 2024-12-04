package example.docuroom.backend.config;

import com.amazonaws.auth.AWSCredentials;
import com.amazonaws.auth.AWSStaticCredentialsProvider;
import com.amazonaws.auth.BasicAWSCredentials;
import com.amazonaws.services.s3.AmazonS3;
import com.amazonaws.services.s3.AmazonS3ClientBuilder;
import com.amazonaws.services.s3.transfer.TransferManager;
import com.amazonaws.services.s3.transfer.TransferManagerBuilder;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

//@Configuration
//public class S3Config {
//    @Bean
//    public AmazonS3 amazonS3() {
//        return AmazonS3ClientBuilder.standard().build();
//    }
//
//    @Bean
//    public TransferManager transferManager(AmazonS3 amazonS3) {
//        return TransferManagerBuilder.standard().withS3Client(amazonS3).build();
//    }
//
//}

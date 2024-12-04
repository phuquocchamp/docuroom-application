package example.docuroom.backend.aws;

import com.amazonaws.AmazonClientException;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.util.List;


@Service
@Slf4j
public class AwsServiceImpl implements AwsService{
    @Override
    public void uploadFile(String bucketName, String keyName, Long contentLength, String contentType, InputStream value) throws AmazonClientException {

    }

    @Override
    public ByteArrayOutputStream downloadFile(String bucketName, String keyName) throws IOException, AmazonClientException {
        return null;
    }

    @Override
    public List<String> listFiles(String bucketName) throws AmazonClientException {
        return List.of();
    }

    @Override
    public void deleteFile(String bucketName, String keyName) throws AmazonClientException {

    }
}

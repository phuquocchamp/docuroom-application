
# DocuRoom 📚💻

**DocuRoom** là một ứng dụng học nhóm trực tuyến với chức năng chia sẻ tài liệu và tương tác trực tiếp giữa các thành viên trong phòng học. Dự án này sử dụng kiến trúc microservices và WebRTC để hỗ trợ các tính năng như chia sẻ tài liệu, gọi video P2P, trò chuyện trực tuyến, và quản lý phòng học.

## 🌟 Mục tiêu của dự án

Mục tiêu chính của **DocuRoom** là tạo ra một nền tảng cho phép người dùng tham gia vào các phòng học trực tuyến để:

- 📄 Chia sẻ tài liệu (PDF, Word, PPT) theo dạng peer-to-peer.
- 📹 Tương tác qua video call và nhắn tin trực tuyến.
- 🔍 Tìm kiếm và truy cập tài liệu do các thành viên khác chia sẻ.
- 🔐 Quản lý thành viên và quyền truy cập trong từng phòng học.

## 🏛️ Kiến trúc tổng quan

**DocuRoom** được thiết kế theo kiến trúc microservices, với các thành phần được xây dựng độc lập và giao tiếp với nhau qua các API RESTful và WebSocket.

### 1. Frontend 🖥️

Frontend của ứng dụng được phát triển bằng **React** và **TypeScript**, khởi tạo với Vite, cung cấp giao diện người dùng mượt mà và dễ sử dụng. Frontend xử lý điều hướng, quản lý trạng thái và kết nối với backend để cung cấp các tính năng thời gian thực.

### 2. Backend Services 🗄️

Backend của DocuRoom bao gồm các dịch vụ microservices sau:

- **Auth Service** 🔐:

  - Đảm nhiệm việc đăng ký, đăng nhập và xác thực người dùng bằng JWT.
  - Quản lý hồ sơ và bảo mật cho người dùng.
- **Room Service** 🏠:

  - Quản lý phòng học nhóm, bao gồm tạo, cập nhật, và xóa phòng.
  - Quản lý thành viên trong phòng, cấp quyền truy cập và bảo vệ phòng bằng mã truy cập (nếu cần).
- **File Service** 📂:

  - Xử lý tải lên và chia sẻ tài liệu giữa các thành viên trong phòng.
  - Lưu trữ tài liệu trong cơ sở dữ liệu hoặc tích hợp với dịch vụ lưu trữ đám mây.
- **Chat Service** 💬:

  - Hỗ trợ chức năng nhắn tin trực tuyến giữa các thành viên trong phòng học.
  - Gửi và nhận tin nhắn thời gian thực qua WebSocket.
- **Signaling Service** (Node.js) 📞:

  - Đóng vai trò là signaling server, hỗ trợ quá trình trao đổi tín hiệu WebRTC để thiết lập kết nối P2P cho video call giữa các thành viên.
  - Đảm bảo kết nối video call ổn định và giảm độ trễ.

## 🗂️ Cấu trúc thư mục

```plaintext
DocuRoom/
├── frontend/                     # Frontend application
├── backend/                      # Backend microservices
│   ├── auth-service/             # Authentication service
│   ├── room-service/             # Room management service
│   ├── file-service/             # File sharing service
│   ├── chat-service/             # Chat service
│   ├── signaling-service/        # Signaling service for WebRTC
├── infra/                        # Infrastructure configurations (Docker, K8s, CI/CD)
├── scripts/                      # Utility scripts for deployment and setup
├── docs/                         # Documentation
└── README.md                     # Project overview
```


## ⚙️ Các tính năng chính

### Tính năng người dùng 👤

1. **Đăng ký và Đăng nhập** 🔑: Người dùng có thể tạo tài khoản và đăng nhập an toàn vào hệ thống.
2. **Quản lý hồ sơ** 📝: Cho phép người dùng cập nhật thông tin cá nhân và thay đổi ảnh đại diện.
3. **Tạo và Tham gia Phòng Học** 🏫:
   - Người dùng có thể tạo phòng học riêng, mời các thành viên khác hoặc tham gia vào phòng đã có.
4. **Chia sẻ tài liệu** 📎:
   - Người dùng có thể tải lên các tài liệu như PDF, Word, và PPT, và chia sẻ với các thành viên trong phòng.
5. **Chat và Video Call** 💬📞:
   - Hỗ trợ chức năng nhắn tin và gọi video P2P, cho phép thành viên tương tác trong thời gian thực.

### Tính năng quản trị phòng học 🔧

1. **Phân quyền** 🛡️: Chủ phòng có thể quản lý quyền truy cập của các thành viên, cấp quyền chỉnh sửa hoặc xem tài liệu.
2. **Quản lý tài liệu và thành viên** 👥:
   - Chủ phòng có thể kiểm soát tài liệu chia sẻ, thêm hoặc xóa thành viên, và đặt mã bảo mật cho phòng học.

## 🛠️ Công nghệ sử dụng

- **Frontend**: React, TypeScript, React Router, Redux Toolkit/Zustand, Tailwind CSS
- **Backend**:
  - **Spring Boot** cho các dịch vụ Auth, Room, File, và Chat.
  - **Node.js** cho Signaling Service (WebRTC).
- **Database**: PostgreSQL hoặc MongoDB để lưu trữ dữ liệu người dùng và tài liệu.
- **Docker và Kubernetes**: Đóng gói và triển khai từng microservice.
- **CI/CD**: GitHub Actions hoặc Jenkins cho quy trình tích hợp và triển khai tự động.

## 🚀 Hướng dẫn cài đặt và chạy ứng dụng

1. **Clone dự án**:

   ```bash
   git clone https://github.com/username/docuroom.git
   cd docuroom
   ```
2. **Cài đặt các thành phần của Backend và Frontend**:

   - Chạy từng microservice trong thư mục `backend` và cài đặt frontend từ thư mục `frontend`.
3. **Chạy Docker Compose**:

   ```bash
   docker-compose up -d
   ```
4. **Triển khai trên Kubernetes** (nếu cần):

   - Sử dụng các file cấu hình trong thư mục `infra/k8s` để triển khai trên Kubernetes.

## 🤝 Đóng góp

Mọi đóng góp và phản hồi đều được hoan nghênh. Vui lòng fork repo này, tạo nhánh mới cho tính năng bạn muốn thêm, và gửi pull request!

---

**DocuRoom** cung cấp giải pháp toàn diện và linh hoạt cho việc học nhóm và chia sẻ tài liệu trực tuyến, mang lại trải nghiệm học tập tích cực và hiệu quả cho người dùng.

var countStage = 0;
let List_cources = [
    {
        "Id": 1,
        "Name": "Lập trình web trung bình với Html, Css",
        "Price": "16000000",
        "Disscount": 50,
        "MucDich": "web",
        "Language": "html+css",
        "Level": "medium",
        "Image": "Images/html-css-course.jpg",
        "Title": "Học HTML và CSS để Xây Dựng Trang Web Chuyên Nghiệp và Hiện Đại",
        "Description": "Khóa học này nhằm giúp học viên nắm vững kiến thức cơ bản và trung bình về lập trình web, tập trung vào HTML và CSS. Từ việc xây dựng cấu trúc trang web đến thiết kế giao diện sáng tạo, bạn sẽ có cơ hội áp dụng kiến thức qua các dự án thực tế. Đặc biệt, khóa học này phù hợp cho người mới bắt đầu trong lĩnh vực phát triển web.",
        "During": 45,
        "FrequencyPerWeek": 3,
        "OpeningDate": "01/01/2023",
        "Studied": 110,
        "FeedBacks": [
            {
                "Id": 1,
                "UserName": "Nguyễn Nam",
                "Time": "12/01/2024",
                "Content": "Hay"
            },
            {
                "Id": 2,
                "UserName": "Nguyễn Chí",
                "Time": "22/11/2023",
                "Content": "Đẳng cấp"
            },
            {
                "Id": 3,
                "UserName": "Nguyễn Tưởng",
                "Time": "11/10/2023",
                "Content": "Víp pro man"
            },
            {
                "Id": 4,
                "UserName": "Phùng Đồng",
                "Time": "02/07/2023",
                "Content": "Tạm"
            },
            {
                "Id": 5,
                "UserName": "Tạ Kiên",
                "Time": "01/03/2023",
                "Content": "Khóa hoc này đã cứu cuộc đời của tôi, gia đinh tôi đã có áo để mặc, có cơm để ăn"
            },
            {
                "Id": 6,
                "UserName": "Nguyễn Nguyễn",
                "Time": "02/05/2023",
                "Content": "Thật ý nghĩa"
            }
        ],
        "Stages": [
            {
                "Title": "Giới Thiệu và Cơ Bản",
                "Duration": 3,
                "Headings": [
                    "Lập trình web và vai trò của HTML, CSS.",
                    "Cấu trúc cơ bản của trang web với HTML.",
                    "Các kiểu chữ, màu sắc, và định dạng cơ bản với CSS."
                ]
            },
            {
                "Title": "Tiếp Tục Với HTML và CSS",
                "Duration": 3,
                "Headings": [
                    "Form và các phần tử nhập liệu trong HTML.",
                    "Box model trong CSS và cách sắp xếp vị trí của phần tử trên trang web.",
                    "Responsive design cơ bản và quy tắc media queries."
                ]
            },
            {
                "Title": "Tiên Tiến Với CSS và Layouts",
                "Duration": 3,
                "Headings": [
                    "Các thuộc tính CSS nâng cao như transitions, transformations, và animations.",
                    "Flexbox và Grid để quản lý bố cục.",
                    "Xây dựng trang web đơn giản với các layout linh hoạt."
                ]
            },
            {
                "Title": "Tích Hợp HTML và CSS với Nhau",
                "Duration": 3,
                "Headings": [
                    "Tổ chức và quản lý mã nguồn trong dự án web.",
                    "Sử dụng HTML và CSS để tạo giao diện người dùng hoàn chỉnh."
                ]
            },
            {
                "Title": "Thực Hành và Dự Án Thực Tế",
                "Duration": 3,
                "Headings": [
                    "Áp dụng kiến thức đã học vào dự án thực tế.",
                    "Phát triển một trang web hoặc ứng dụng nhỏ với HTML và CSS."
                ]
            },
            {
                "Title": "Kiểm Thử và Tối Ưu Hóa",
                "Duration": 3,
                "Headings": [
                    "Kiểm thử và sửa lỗi trên trang web.",
                    "Tối ưu hóa hiệu suất và trải nghiệm người dùng."
                ]
            },
            {
                "Title": "Triển Khai và Quản Lý Dự Án",
                "Duration": 3,
                "Headings": [
                    "Cách triển khai trang web lên môi trường sản xuất.",
                    "Quản lý mã nguồn và công cụ hỗ trợ như Git."
                ]
            }
        ]
    },
    {
        "Id": 2,
        "Name": "Lập trình web trung bình với Python",
        "Price": "17000000",
        "Disscount": 5,
        "MucDich": "web",
        "Language": "python",
        "Level": "medium",
        "Image": "Images/web-python.png",
        "Title": "Học Lập Trình Web Trung Bình với Python: Xây Dựng Trang Web Động và Tương Tác",
        "Description": "Khóa học này tập trung vào việc giảng dạy lập trình web với ngôn ngữ Python, từ kiến thức cơ bản đến trung bình. Học viên sẽ được thực hành xây dựng trang web động và tương tác, học cách sử dụng các framework phổ biến như Django và Flask. Qua các dự án thực tế, họ sẽ áp dụng những kiến thức đã học vào thực tế và phát triển kỹ năng lập trình web của mình.",
        "During": 45,
        "FrequencyPerWeek": 3,
        "OpeningDate": "01/01/2023",
        "Studied": 111,
        "FeedBacks": [
            {
                "Id": 1,
                "UserName": "Nguyễn Nam",
                "Time": "12/01/2024",
                "Content": "Hay"
            },
            {
                "Id": 2,
                "UserName": "Nguyễn Chí",
                "Time": "22/11/2023",
                "Content": "Đẳng cấp"
            },
            {
                "Id": 3,
                "UserName": "Nguyễn Tưởng",
                "Time": "11/10/2023",
                "Content": "Víp pro man"
            },
            {
                "Id": 4,
                "UserName": "Phùng Đồng",
                "Time": "02/07/2023",
                "Content": "Tạm"
            }
        ],
        "Stages": [
            {
                "Title": "Giới Thiệu và Cơ Bản với Python",
                "Duration": 3,
                "Headings": [
                    "Giới thiệu về ngôn ngữ lập trình Python.",
                    "Cơ bản về cú pháp và cấu trúc chương trình Python.",
                    "Sử dụng Python trong lập trình web."
                ]
            },
            {
                "Title": "Xây Dựng Ứng Dụng Web Đơn Giản với Flask",
                "Duration": 4,
                "Headings": [
                    "Cài đặt và cấu hình Flask.",
                    "Xây dựng trang web đơn giản với Flask.",
                    "Xử lý dữ liệu từ người dùng và hiển thị kết quả."
                ]
            },
            {
                "Title": "Tương Tác với Cơ Sở Dữ Liệu",
                "Duration": 3,
                "Headings": [
                    "Kết nối ứng dụng web với cơ sở dữ liệu.",
                    "Thực hiện các thao tác CRUD (Create, Read, Update, Delete).",
                    "Bảo mật và quản lý dữ liệu trong ứng dụng web."
                ]
            },
            {
                "Title": "Frontend và Backend",
                "Duration": 3,
                "Headings": [
                    "Tích hợp HTML và CSS với Flask.",
                    "Xây dựng giao diện người dùng đẹp và thân thiện.",
                    "Giao tiếp giữa frontend và backend."
                ]
            },
            {
                "Title": "API và Tích Hợp Dịch Vụ",
                "Duration": 3,
                "Headings": [
                    "Xây dựng API với Flask.",
                    "Tích hợp dịch vụ bên ngoài vào ứng dụng web.",
                    "Quản lý yêu cầu và trả về dữ liệu."
                ]
            },
            {
                "Title": "Thử Nghiệm và Tối Ưu Hóa",
                "Duration": 3,
                "Headings": [
                    "Kiểm thử ứng dụng web với các framework như Pytest.",
                    "Tối ưu hóa hiệu suất và sửa lỗi trong ứng dụng."
                ]
            },
            {
                "Title": "Triển Khai và Quản Lý Dự Án",
                "Duration": 3,
                "Headings": [
                    "Triển khai ứng dụng web Python lên môi trường sản xuất.",
                    "Quản lý mã nguồn và hợp nhất thay đổi với Git."
                ]
            }
        ]
    },
    {
        "Id": 3,
        "Name": "Lập trình web trung bình với Java",
        "Price": "18000000",
        "Disscount": 0,
        "MucDich": "web",
        "Language": "java",
        "Level": "medium",
        "Image": "Images/web-java.jpg",
        "Title": "Học Lập Trình Web Trung Bình với Java: Xây Dựng Ứng Dụng Đa Nền Tảng",
        "Description": "Khóa học này tập trung vào việc giảng dạy lập trình web với ngôn ngữ Java, từ kiến thức cơ bản đến trung bình. Học viên sẽ được thực hành xây dựng ứng dụng web đa nền tảng sử dụng các công nghệ phổ biến như Spring Framework. Qua các dự án thực tế, họ sẽ áp dụng kiến thức đã học để phát triển ứng dụng web đa nền tảng hiện đại.",
        "During": 50,
        "FrequencyPerWeek": 3,
        "OpeningDate": "15/09/2023",
        "Studied": 20,
        "FeedBacks": [
            {
                "Id": 1,
                "UserName": "Nguyễn Nam",
                "Time": "12/01/2024",
                "Content": "Hay"
            },
            {
                "Id": 2,
                "UserName": "Nguyễn Chí",
                "Time": "22/11/2023",
                "Content": "Đẳng cấp"
            },
            {
                "Id": 3,
                "UserName": "Nguyễn Tưởng",
                "Time": "11/10/2023",
                "Content": "Víp pro man"
            },
            {
                "Id": 4,
                "UserName": "Phùng Đồng",
                "Time": "02/07/2023",
                "Content": "Tạm"
            },
            {
                "Id": 5,
                "UserName": "Tạ Kiên",
                "Time": "01/03/2023",
                "Content": "Khóa hoc này đã cứu cuộc đời của tôi, gia đinh tôi đã có áo để mặc, có cơm để ăn"
            }
        ],
        "Stages": [
            {
                "Title": "Giới Thiệu và Cơ Bản với Java",
                "Duration": 3,
                "Headings": [
                    "Giới thiệu về ngôn ngữ lập trình Java.",
                    "Cơ bản về cú pháp và cấu trúc chương trình Java.",
                    "Sử dụng Java trong lập trình web."
                ]
            },
            {
                "Title": "Xây Dựng Ứng Dụng Web với Spring Framework",
                "Duration": 4,
                "Headings": [
                    "Cài đặt và cấu hình Spring Framework.",
                    "Xây dựng ứng dụng web đơn giản với Spring MVC.",
                    "Xử lý yêu cầu từ người dùng và hiển thị kết quả."
                ]
            },
            {
                "Title": "Tương Tác với Cơ Sở Dữ Liệu",
                "Duration": 3,
                "Headings": [
                    "Kết nối ứng dụng web với cơ sở dữ liệu.",
                    "Thực hiện các thao tác CRUD (Create, Read, Update, Delete) với Hibernate.",
                    "Bảo mật và quản lý dữ liệu trong ứng dụng web."
                ]
            },
            {
                "Title": "Frontend và Backend",
                "Duration": 3,
                "Headings": [
                    "Tích hợp HTML, CSS, và Thymeleaf với Spring.",
                    "Xây dựng giao diện người dùng đẹp và thân thiện.",
                    "Giao tiếp giữa frontend và backend."
                ]
            },
            {
                "Title": "API và Tích Hợp Dịch Vụ",
                "Duration": 3,
                "Headings": [
                    "Xây dựng API với Spring Boot.",
                    "Tích hợp dịch vụ bên ngoài vào ứng dụng web.",
                    "Quản lý yêu cầu và trả về dữ liệu."
                ]
            },
            {
                "Title": "Thử Nghiệm và Tối Ưu Hóa",
                "Duration": 3,
                "Headings": [
                    "Kiểm thử ứng dụng web với JUnit và TestNG.",
                    "Tối ưu hóa hiệu suất và sửa lỗi trong ứng dụng."
                ]
            },
            {
                "Title": "Triển Khai và Quản Lý Dự Án",
                "Duration": 3,
                "Headings": [
                    "Triển khai ứng dụng web Java lên môi trường sản xuất.",
                    "Quản lý mã nguồn và hợp nhất thay đổi với Git."
                ]
            }
        ]
    },
    {
        "Id": 4,
        "Name": "Lập trình web cơ bản với Javascript",
        "Price": "19000000",
        "Disscount": 51,
        "MucDich": "web",
        "Language": "javascript",
        "Level": "basic",
        "Image": "Images/web-js.jpg",
        "Title": "Học Lập Trình Web Cơ Bản với JavaScript: Xây Dựng Trang Web Tương Tác",
        "Description": "Khóa học này là hành trình khám phá lập trình web cơ bản với ngôn ngữ JavaScript. Học viên sẽ được dẫn dắt qua các khái niệm cơ bản như biến, điều kiện, vòng lặp và tương tác với DOM để xây dựng trang web tương tác đơn giản. Qua các bài thực hành, họ sẽ làm quen với sức mạnh và linh hoạt của JavaScript trong phát triển trang web.",
        "During": 50,
        "FrequencyPerWeek": 3,
        "OpeningDate": "22/07/2024",
        "Studied": 230,
        "FeedBacks": [
            {
                "Id": 1,
                "UserName": "Nguyễn Nam",
                "Time": "12/01/2024",
                "Content": "Hay"
            },
            {
                "Id": 2,
                "UserName": "Nguyễn Chí",
                "Time": "22/11/2023",
                "Content": "Đẳng cấp"
            }
        ],
        "Stages": [
            {
                "Title": "Giới Thiệu và Cơ Bản với JavaScript",
                "Duration": 3,
                "Headings": [
                    "Giới thiệu về ngôn ngữ lập trình JavaScript.",
                    "Cú pháp cơ bản và cấu trúc chương trình JavaScript.",
                    "Sử dụng JavaScript trong trang web."
                ]
            },
            {
                "Title": "DOM và Sự Tương Tác với Trang Web",
                "Duration": 4,
                "Headings": [
                    "Hiểu về Document Object Model (DOM).",
                    "Thực hiện sự tương tác với phần tử trên trang web.",
                    "Xử lý sự kiện và thay đổi nội dung dinamically."
                ]
            },
            {
                "Title": "CSS và JavaScript",
                "Duration": 3,
                "Headings": [
                    "Thay đổi các thuộc tính CSS bằng JavaScript.",
                    "Tạo và quản lý hiệu ứng và animations.",
                    "Responsive design với JavaScript."
                ]
            },
            {
                "Title": "Ajax và Xử Lý Dữ Liệu Bất Đồng Bộ",
                "Duration": 3,
                "Headings": [
                    "Sử dụng XMLHttpRequest và Fetch API.",
                    "Xử lý dữ liệu từ máy chủ mà không làm tải lại trang.",
                    "Thực hành với Promises và Async/Await."
                ]
            },
            {
                "Title": "Thư Viện và Frameworks",
                "Duration": 3,
                "Headings": [
                    "Giới thiệu về jQuery và sử dụng cơ bản.",
                    "Làm việc với một số frameworks như React hoặc VueJS.",
                    "Ưu điểm và nhược điểm của việc sử dụng thư viện và frameworks."
                ]
            },
            {
                "Title": "Thực Hành và Dự Án Thực Tế",
                "Duration": 4,
                "Headings": [
                    "Áp dụng kiến thức đã học vào dự án thực tế.",
                    "Phát triển một trang web đơn giản hoặc ứng dụng nhỏ.",
                    "Tối ưu hóa và sửa lỗi trong dự án."
                ]
            },
            {
                "Title": "Triển Khai và Quản Lý Dự Án",
                "Duration": 3,
                "Headings": [
                    "Triển khai trang web lên môi trường sản xuất.",
                    "Quản lý mã nguồn và hợp nhất thay đổi với Git.",
                    "Chiến lược bảo trì và cập nhật dự án."
                ]
            }
        ]
    },
    {
        "Id": 5,
        "Name": "Lập trình web cơ bản với C#",
        "Price": "20000000",
        "Disscount": 15,
        "MucDich": "web",
        "Language": "c#",
        "Level": "basic",
        "Image": "Images/web-cs-Aspnet.png",
        "Title": "Học Lập Trình Web Cơ Bản với C#: Xây Dựng Ứng Dụng Web ASP.NET",
        "Description": "Khóa học này tập trung vào việc giảng dạy lập trình web cơ bản với ngôn ngữ C#. Học viên sẽ được thực hành xây dựng ứng dụng web sử dụng ASP.NET, một framework mạnh mẽ cho phát triển ứng dụng web. Qua các dự án thực tế, họ sẽ áp dụng kiến thức đã học để tạo ra ứng dụng web đơn giản và hiệu quả.",
        "During": 50,
        "FrequencyPerWeek": 3,
        "OpeningDate": "15/09/2023",
        "Studied": 0,
        "FeedBacks": [],
        "Stages": [
            {
                "Title": "Giới Thiệu và Cơ Bản với C#",
                "Duration": 3,
                "Headings": [
                    "Giới thiệu về ngôn ngữ lập trình C#.",
                    "Cú pháp cơ bản và cấu trúc chương trình C#.",
                    "Sử dụng C# trong lập trình web."
                ]
            },
            {
                "Title": "ASP.NET Core và Xây Dựng Ứng Dụng Web",
                "Duration": 4,
                "Headings": [
                    "Cài đặt và cấu hình ASP.NET Core.",
                    "Xây dựng ứng dụng web đơn giản với ASP.NET Core MVC.",
                    "Xử lý yêu cầu từ người dùng và hiển thị kết quả."
                ]
            },
            {
                "Title": "Tương Tác với Cơ Sở Dữ Liệu",
                "Duration": 3,
                "Headings": [
                    "Kết nối ứng dụng web với cơ sở dữ liệu.",
                    "Thực hiện các thao tác CRUD (Create, Read, Update, Delete) với Entity Framework.",
                    "Bảo mật và quản lý dữ liệu trong ứng dụng web."
                ]
            },
            {
                "Title": "Frontend và Backend",
                "Duration": 3,
                "Headings": [
                    "Tích hợp HTML, CSS, và Razor Pages với ASP.NET Core.",
                    "Xây dựng giao diện người dùng đẹp và thân thiện.",
                    "Giao tiếp giữa frontend và backend."
                ]
            },
            {
                "Title": "API và Tích Hợp Dịch Vụ",
                "Duration": 3,
                "Headings": [
                    "Xây dựng API với ASP.NET Core.",
                    "Tích hợp dịch vụ bên ngoài vào ứng dụng web.",
                    "Quản lý yêu cầu và trả về dữ liệu."
                ]
            },
            {
                "Title": "Thử Nghiệm và Tối Ưu Hóa",
                "Duration": 3,
                "Headings": [
                    "Kiểm thử ứng dụng web với NUnit hoặc MSTest.",
                    "Tối ưu hóa hiệu suất và sửa lỗi trong ứng dụng."
                ]
            },
            {
                "Title": "Triển Khai và Quản Lý Dự Án",
                "Duration": 3,
                "Headings": [
                    "Triển khai ứng dụng web C# lên môi trường sản xuất.",
                    "Quản lý mã nguồn và hợp nhất thay đổi với Git.",
                    "Chiến lược bảo trì và cập nhật dự án."
                ]
            }
        ]
    },
    {
        "Id": 6,
        "Name": "Khóa học mất gốc nâng cao với C#",
        "Price": "21000000",
        "Disscount": 20,
        "MucDich": "",
        "Language": "c#",
        "Level": "high",
        "Image": "Images/web-cs-Aspnet.png",
        "Title": "Nâng Cao Kỹ Năng Lập Trình với Khóa Học Mất Gốc với C#",
        "Description": "Khóa học này dành cho những người đã có kiến thức cơ bản về lập trình C# nhưng muốn nâng cao tới mức độ chuyên sâu. Học viên sẽ tiếp tục khám phá về ASP.NET và các khái niệm nâng cao như Entity Framework, Dependency Injection, và xử lý lỗi. Qua các dự án thực tế, họ sẽ xây dựng ứng dụng web phức tạp và hiệu quả.",
        "During": 50,
        "FrequencyPerWeek": 3,
        "OpeningDate": "22/07/2024",
        "Studied": 34,
        "FeedBacks": [
            {
                "Id": 3,
                "UserName": "Nguyễn Tưởng",
                "Time": "11/10/2023",
                "Content": "Víp pro man"
            },
            {
                "Id": 4,
                "UserName": "Phùng Đồng",
                "Time": "02/07/2023",
                "Content": "Tạm"
            },
            {
                "Id": 5,
                "UserName": "Tạ Kiên",
                "Time": "01/03/2023",
                "Content": "Khóa hoc này đã cứu cuộc đời của tôi, gia đinh tôi đã có áo để mặc, có cơm để ăn"
            },
            {
                "Id": 6,
                "UserName": "Nguyễn Nguyễn",
                "Time": "02/05/2023",
                "Content": "Thật ý nghĩa"
            }
        ],
        "Stages": [
            {
                "Title": "Giới Thiệu và Cơ Bản với C#",
                "Duration": 3,
                "Headings": [
                    "Giới thiệu về ngôn ngữ lập trình C#.",
                    "Cú pháp cơ bản và cấu trúc chương trình C#.",
                    "Sử dụng C# trong lập trình web."
                ]
            },
            {
                "Title": "ASP.NET Core và Xây Dựng Ứng Dụng Web",
                "Duration": 4,
                "Headings": [
                    "Cài đặt và cấu hình ASP.NET Core.",
                    "Xây dựng ứng dụng web đơn giản với ASP.NET Core MVC.",
                    "Xử lý yêu cầu từ người dùng và hiển thị kết quả."
                ]
            },
            {
                "Title": "Tương Tác với Cơ Sở Dữ Liệu",
                "Duration": 3,
                "Headings": [
                    "Kết nối ứng dụng web với cơ sở dữ liệu.",
                    "Thực hiện các thao tác CRUD (Create, Read, Update, Delete) với Entity Framework.",
                    "Bảo mật và quản lý dữ liệu trong ứng dụng web."
                ]
            },
            {
                "Title": "Frontend và Backend",
                "Duration": 3,
                "Headings": [
                    "Tích hợp HTML, CSS, và Razor Pages với ASP.NET Core.",
                    "Xây dựng giao diện người dùng đẹp và thân thiện.",
                    "Giao tiếp giữa frontend và backend."
                ]
            },
            {
                "Title": "API và Tích Hợp Dịch Vụ",
                "Duration": 3,
                "Headings": [
                    "Xây dựng API với ASP.NET Core.",
                    "Tích hợp dịch vụ bên ngoài vào ứng dụng web.",
                    "Quản lý yêu cầu và trả về dữ liệu."
                ]
            },
            {
                "Title": "Thử Nghiệm và Tối Ưu Hóa",
                "Duration": 3,
                "Headings": [
                    "Kiểm thử ứng dụng web với NUnit hoặc MSTest.",
                    "Tối ưu hóa hiệu suất và sửa lỗi trong ứng dụng."
                ]
            },
            {
                "Title": "Triển Khai và Quản Lý Dự Án",
                "Duration": 3,
                "Headings": [
                    "Triển khai ứng dụng web C# lên môi trường sản xuất.",
                    "Quản lý mã nguồn và hợp nhất thay đổi với Git.",
                    "Chiến lược bảo trì và cập nhật dự án."
                ]
            }
        ]
    },
    {
        "Id": 7,
        "Name": "Khóa học mất gốc trung bình với Java",
        "Price": "22000000",
        "Disscount": 70,
        "MucDich": "",
        "Language": "java",
        "Level": "medium",
        "Image": "Images/web-java.jpg",
        "Title": "Tận Hưởng Việc Học Lập Trình Java Mặc Dù Bạn Đã Mất Gốc",
        "Description": "Khóa học này đặc biệt thiết kế cho những người đã mất gốc về lập trình Java hoặc có kiến thức cơ bản nhưng muốn đưa kỹ năng lập trình của mình lên một tầm cao mới. Học viên sẽ học cách sử dụng Java cho phát triển ứng dụng web, làm quen với các framework như Spring Boot và thực hành xây dựng các dự án thực tế.",
        "During": 50,
        "FrequencyPerWeek": 3,
        "OpeningDate": "22/07/2024",
        "Studied": 301,
        "FeedBacks": [
            {
                "Id": 1,
                "UserName": "Nguyễn Nam",
                "Time": "12/01/2024",
                "Content": "Hay"
            },
            {
                "Id": 2,
                "UserName": "Nguyễn Chí",
                "Time": "22/11/2023",
                "Content": "Đẳng cấp"
            },
            {
                "Id": 3,
                "UserName": "Nguyễn Tưởng",
                "Time": "11/10/2023",
                "Content": "Víp pro man"
            },
            {
                "Id": 4,
                "UserName": "Phùng Đồng",
                "Time": "02/07/2023",
                "Content": "Tạm"
            },
            {
                "Id": 5,
                "UserName": "Tạ Kiên",
                "Time": "01/03/2023",
                "Content": "Khóa hoc này đã cứu cuộc đời của tôi, gia đinh tôi đã có áo để mặc, có cơm để ăn"
            },
            {
                "Id": 6,
                "UserName": "Nguyễn Nguyễn",
                "Time": "02/05/2023",
                "Content": "Thật ý nghĩa"
            }
        ],
        "Stages": [
            {
                "Title": "Giới Thiệu và Cơ Bản với Java",
                "Duration": 3,
                "Headings": [
                    "Giới thiệu về ngôn ngữ lập trình Java.",
                    "Cơ bản về cú pháp và cấu trúc chương trình Java.",
                    "Sử dụng Java trong lập trình web."
                ]
            },
            {
                "Title": "Xây Dựng Ứng Dụng Web với Spring Framework",
                "Duration": 4,
                "Headings": [
                    "Cài đặt và cấu hình Spring Framework.",
                    "Xây dựng ứng dụng web đơn giản với Spring MVC.",
                    "Xử lý yêu cầu từ người dùng và hiển thị kết quả."
                ]
            },
            {
                "Title": "Tương Tác với Cơ Sở Dữ Liệu",
                "Duration": 3,
                "Headings": [
                    "Kết nối ứng dụng web với cơ sở dữ liệu.",
                    "Thực hiện các thao tác CRUD (Create, Read, Update, Delete) với Hibernate.",
                    "Bảo mật và quản lý dữ liệu trong ứng dụng web."
                ]
            },
            {
                "Title": "Frontend và Backend",
                "Duration": 3,
                "Headings": [
                    "Tích hợp HTML, CSS, và Thymeleaf với Spring.",
                    "Xây dựng giao diện người dùng đẹp và thân thiện.",
                    "Giao tiếp giữa frontend và backend."
                ]
            },
            {
                "Title": "API và Tích Hợp Dịch Vụ",
                "Duration": 3,
                "Headings": [
                    "Xây dựng API với Spring Boot.",
                    "Tích hợp dịch vụ bên ngoài vào ứng dụng web.",
                    "Quản lý yêu cầu và trả về dữ liệu."
                ]
            },
            {
                "Title": "Thử Nghiệm và Tối Ưu Hóa",
                "Duration": 3,
                "Headings": [
                    "Kiểm thử ứng dụng web với JUnit và TestNG.",
                    "Tối ưu hóa hiệu suất và sửa lỗi trong ứng dụng."
                ]
            },
            {
                "Title": "Triển Khai và Quản Lý Dự Án",
                "Duration": 3,
                "Headings": [
                    "Triển khai ứng dụng web Java lên môi trường sản xuất.",
                    "Quản lý mã nguồn và hợp nhất thay đổi với Git."
                ]
            }
        ]
    },
    {
        "Id": 8,
        "Name": "Lập trình di động cơ bản với Flutter",
        "Price": "23000000",
        "Disscount": 99,
        "MucDich": "mobile",
        "Language": "flutter",
        "Level": "basic",
        "Image": "Images/mobile-flutter.png",
        "Title": "Học Lập Trình Di Động với Flutter: Xây Dựng Ứng Dụng Đa Nền Tảng Hiệu Quả và Mạnh Mẽ Cho Những Lập Trình Viên Bắt Đầu",
        "Description": "Khóa học này mang đến kiến thức cơ bản về lập trình di động với Flutter, một framework mạnh mẽ của Google. Học viên sẽ được thực hành xây dựng ứng dụng di động đa nền tảng với giao diện đẹp mắt và hiệu suất cao. Qua các dự án thực tế, họ sẽ nắm vững cách sử dụng Flutter để phát triển ứng dụng di động.",
        "During": 50,
        "FrequencyPerWeek": 3,
        "OpeningDate": "15/09/2023",
        "Studied": 1100,
        "FeedBacks": [
            {
                "Id": 1,
                "UserName": "Nguyễn Nam",
                "Time": "12/01/2024",
                "Content": "Hay"
            },
            {
                "Id": 2,
                "UserName": "Nguyễn Chí",
                "Time": "22/11/2023",
                "Content": "Đẳng cấp"
            },
            {
                "Id": 3,
                "UserName": "Nguyễn Tưởng",
                "Time": "11/10/2023",
                "Content": "Víp pro man"
            },
            {
                "Id": 4,
                "UserName": "Phùng Đồng",
                "Time": "02/07/2023",
                "Content": "Tạm"
            },
            {
                "Id": 5,
                "UserName": "Tạ Kiên",
                "Time": "01/03/2023",
                "Content": "Khóa hoc này đã cứu cuộc đời của tôi, gia đinh tôi đã có áo để mặc, có cơm để ăn"
            },
            {
                "Id": 6,
                "UserName": "Nguyễn Nguyễn",
                "Time": "02/05/2023",
                "Content": "Thật ý nghĩa"
            },
            {
                "Id": 7,
                "UserName": "Tạ Kiên",
                "Time": "01/03/2023",
                "Content": "Khóa hoc này đã cứu cuộc đời của tôi, gia đinh tôi đã có áo để mặc, có cơm để ăn"
            },
            {
                "Id": 8,
                "UserName": "Nguyễn Nguyễn",
                "Time": "02/05/2023",
                "Content": "Thật ý nghĩa"
            }
        ],
        "Stages": [
            {
                "Title": "Giới Thiệu và Cơ Bản với Flutter",
                "Duration": 3,
                "Headings": [
                    "Giới thiệu về lập trình di động và Flutter.",
                    "Cài đặt và cấu hình môi trường phát triển Flutter.",
                    "Sử dụng Dart, ngôn ngữ lập trình của Flutter."
                ]
            },
            {
                "Title": "Xây Dựng Giao Diện Người Dùng với Flutter",
                "Duration": 4,
                "Headings": [
                    "Tạo các thành phần giao diện cơ bản như Buttons, Text, và Image.",
                    "Sử dụng layout và thực hiện bố cục trang.",
                    "Tích hợp các widget để xây dựng giao diện phức tạp."
                ]
            },
            {
                "Title": "Tương Tác và Điều Hướng",
                "Duration": 3,
                "Headings": [
                    "Xử lý sự kiện người dùng với GestureDetector.",
                    "Điều hướng giữa các màn hình sử dụng Navigator.",
                    "Thực hiện điều hướng dựa trên dữ liệu."
                ]
            },
            {
                "Title": "State Management",
                "Duration": 3,
                "Headings": [
                    "Hiểu về khái niệm state và lifecycle trong Flutter.",
                    "Sử dụng các giải pháp quản lý state như Provider hoặc Bloc.",
                    "Optimizing performance với Flutter."
                ]
            },
            {
                "Title": "Thực Hiện Kết Nối Dữ Liệu",
                "Duration": 3,
                "Headings": [
                    "Lấy dữ liệu từ API sử dụng HTTP package.",
                    "Xử lý và hiển thị dữ liệu từ nguồn bên ngoài.",
                    "Bảo mật và quản lý dữ liệu trong ứng dụng di động."
                ]
            },
            {
                "Title": "Testing và Debugging",
                "Duration": 3,
                "Headings": [
                    "Viết unit tests và integration tests cho ứng dụng.",
                    "Debugging và tối ưu hóa hiệu suất.",
                    "Testing trên nhiều thiết bị và môi trường khác nhau."
                ]
            },
            {
                "Title": "Triển Khai Ứng Dụng",
                "Duration": 3,
                "Headings": [
                    "Triển khai ứng dụng di động lên các nền tảng như iOS và Android.",
                    "Xử lý các vấn đề liên quan đến triển khai.",
                    "Quản lý cập nhật và bảo trì ứng dụng."
                ]
            }
        ]
    },
    {
        "Id": 9,
        "Name": "Lập trình di động cơ bản với Kotlin",
        "Price": "24000000",
        "Disscount": 100,
        "MucDich": "mobile",
        "Language": "kotlin",
        "Level": "basic",
        "Image": "Images/mobile-kotlin.png",
        "Title": "Bắt Đầu Hành Trình Lập Trình Di Động với Kotlin: Xây Dựng Ứng Dụng Hiện Đại Cho Mọi Người",
  "Description": "Khóa học này tập trung vào việc giảng dạy lập trình di động với ngôn ngữ Kotlin, một ngôn ngữ hiện đại và phổ biến. Học viên sẽ được hướng dẫn từ những kiến thức cơ bản như cú pháp và logic lập trình, đến những khái niệm nâng cao như xử lý sự kiện, giao diện người dùng, và kết nối dữ liệu. Qua nhiều dự án thực tế, họ sẽ xây dựng ứng dụng di động đa nền tảng đẹp mắt và linh hoạt.",
        "During": 50,
        "FrequencyPerWeek": 3,
        "OpeningDate": "15/01/2024",
        "Studied": 110,
        "FeedBacks": [
            {
                "Id": 1,
                "UserName": "Nguyễn Nam",
                "Time": "12/01/2024",
                "Content": "Hay"
            },
            {
                "Id": 2,
                "UserName": "Nguyễn Chí",
                "Time": "22/11/2023",
                "Content": "Đẳng cấp"
            },
            {
                "Id": 3,
                "UserName": "Nguyễn Tưởng",
                "Time": "11/10/2023",
                "Content": "Víp pro man"
            },
            {
                "Id": 4,
                "UserName": "Phùng Đồng",
                "Time": "02/07/2023",
                "Content": "Tạm"
            },
            {
                "Id": 5,
                "UserName": "Tạ Kiên",
                "Time": "01/03/2023",
                "Content": "Khóa hoc này đã cứu cuộc đời của tôi, gia đinh tôi đã có áo để mặc, có cơm để ăn"
            },
            {
                "Id": 6,
                "UserName": "Nguyễn Nguyễn",
                "Time": "02/05/2023",
                "Content": "Thật ý nghĩa"
            }
        ],
        "Stages": [
            {
                "Title": "Giới Thiệu và Cơ Bản với Kotlin",
                "Duration": 3,
                "Headings": [
                    "Giới thiệu về lập trình di động và Kotlin.",
                    "Cài đặt và cấu hình môi trường phát triển Kotlin.",
                    "Cú pháp cơ bản và cấu trúc chương trình Kotlin."
                ]
            },
            {
                "Title": "Xây Dựng Giao Diện Người Dùng với Android Studio",
                "Duration": 4,
                "Headings": [
                    "Tạo các thành phần giao diện cơ bản như Buttons, Text, và Image.",
                    "Sử dụng layout và thực hiện bố cục trang.",
                    "Tích hợp các widget để xây dựng giao diện đa dạng."
                ]
            },
            {
                "Title": "Tương Tác và Điều Hướng",
                "Duration": 3,
                "Headings": [
                    "Xử lý sự kiện người dùng với View.OnClickListener.",
                    "Điều hướng giữa các màn hình sử dụng Intent và Fragment.",
                    "Thực hiện điều hướng dựa trên dữ liệu và tham số."
                ]
            },
            {
                "Title": "Lập Trình Với Kotlin Android Extensions",
                "Duration": 3,
                "Headings": [
                    "Sử dụng Kotlin Android Extensions để giảm boilerplate code.",
                    "Hiểu về synthetic properties và sử dụng chúng.",
                    "Tối ưu hóa mã nguồn và tăng hiệu suất với Extensions."
                ]
            },
            {
                "Title": "Xử Lý Dữ Liệu và Lưu Trữ",
                "Duration": 3,
                "Headings": [
                    "Lấy và hiển thị dữ liệu từ nguồn bên ngoài.",
                    "Lưu trữ dữ liệu trên thiết bị sử dụng SharedPreferences.",
                    "Sử dụng SQLite để lưu trữ dữ liệu cục bộ trong ứng dụng."
                ]
            },
            {
                "Title": "Thử Nghiệm và Debugging",
                "Duration": 3,
                "Headings": [
                    "Viết và chạy unit tests cho ứng dụng.",
                    "Debugging và sửa lỗi trong mã nguồn.",
                    "Testing trên nhiều thiết bị và môi trường khác nhau."
                ]
            },
            {
                "Title": "Triển Khai Ứng Dụng",
                "Duration": 3,
                "Headings": [
                    "Triển khai ứng dụng di động lên Google Play.",
                    "Xử lý vấn đề liên quan đến triển khai và cập nhật.",
                    "Quản lý vòng đời ứng dụng và cập nhật tính năng."
                ]
            }
        ]
    },
    {
        "Id": 10,
        "Name": "Lập trình di động cơ bản với Java",
        "Price": "25000000",
        "Disscount": 2,
        "MucDich": "mobile",
        "Language": "java",
        "Level": "basic",
        "Image": "Images/mobile-java.jpg",
        "Title": "Bắt Đầu Hành Trình Lập Trình Di Động với Java: Xây Dựng Ứng Dụng Đa Nền Tảng Hiệu Quả và Linh Hoạt",
        "Description": "Khóa học này tập trung vào việc giảng dạy lập trình di động với ngôn ngữ Java, một ngôn ngữ mạnh mẽ và linh hoạt. Học viên sẽ bắt đầu từ những kiến thức cơ bản như biến, điều kiện, và vòng lặp, rồi chuyển sang những khái niệm nâng cao như xử lý sự kiện, giao diện người dùng, và kết nối dữ liệu. Qua nhiều dự án thực tế, họ sẽ xây dựng ứng dụng di động đa nền tảng với hiệu suất và linh hoạt cao.",
        "During": 50,
        "FrequencyPerWeek": 3,
        "OpeningDate": "15/01/2024",
        "Studied": 110,
        "FeedBacks": [
            {
                "Id": 1,
                "UserName": "Nguyễn Nam",
                "Time": "12/01/2024",
                "Content": "Hay"
            },
            {
                "Id": 2,
                "UserName": "Nguyễn Chí",
                "Time": "22/11/2023",
                "Content": "Đẳng cấp"
            },
            {
                "Id": 3,
                "UserName": "Nguyễn Tưởng",
                "Time": "11/10/2023",
                "Content": "Víp pro man"
            },
            {
                "Id": 4,
                "UserName": "Phùng Đồng",
                "Time": "02/07/2023",
                "Content": "Tạm"
            },
            {
                "Id": 5,
                "UserName": "Tạ Kiên",
                "Time": "01/03/2023",
                "Content": "Khóa hoc này đã cứu cuộc đời của tôi, gia đinh tôi đã có áo để mặc, có cơm để ăn"
            },
            {
                "Id": 6,
                "UserName": "Nguyễn Nguyễn",
                "Time": "02/05/2023",
                "Content": "Thật ý nghĩa"
            }
        ],
        "Stages": [
            {
                "Title": "Giới Thiệu và Cơ Bản với Java",
                "Duration": 3,
                "Headings": [
                    "Giới thiệu về ngôn ngữ lập trình Java.",
                    "Cú pháp cơ bản và cấu trúc chương trình Java.",
                    "Sử dụng Java trong lập trình di động."
                ]
            },
            {
                "Title": "Xây Dựng Ứng Dụng Android với Android Studio",
                "Duration": 4,
                "Headings": [
                    "Cài đặt và cấu hình môi trường phát triển Android.",
                    "Xây dựng ứng dụng di động đơn giản với Android Studio.",
                    "Sử dụng Activities và Fragments trong ứng dụng Android."
                ]
            },
            {
                "Title": "Giao Diện Người Dùng và Layouts",
                "Duration": 3,
                "Headings": [
                    "Thiết kế giao diện người dùng với XML.",
                    "Sử dụng layouts để tổ chức giao diện.",
                    "Tích hợp và tùy chỉnh các thành phần giao diện."
                ]
            },
            {
                "Title": "Tương Tác và Điều Hướng",
                "Duration": 3,
                "Headings": [
                    "Xử lý sự kiện người dùng với View.OnClickListener.",
                    "Điều hướng giữa các màn hình sử dụng Intent và Fragment.",
                    "Thực hiện điều hướng dựa trên dữ liệu và tham số."
                ]
            },
            {
                "Title": "Lưu Trữ và Quản Lý Dữ Liệu",
                "Duration": 3,
                "Headings": [
                    "Lưu trữ dữ liệu trên thiết bị với SharedPreferences.",
                    "Sử dụng SQLite để quản lý cơ sở dữ liệu.",
                    "Thực hiện các thao tác CRUD (Create, Read, Update, Delete)."
                ]
            },
            {
                "Title": "Thử Nghiệm và Debugging",
                "Duration": 3,
                "Headings": [
                    "Viết và chạy unit tests cho ứng dụng Android.",
                    "Debugging và sửa lỗi trong mã nguồn.",
                    "Testing trên nhiều thiết bị và môi trường khác nhau."
                ]
            },
            {
                "Title": "Triển Khai và Quản Lý Dự Án",
                "Duration": 3,
                "Headings": [
                    "Triển khai ứng dụng lên thiết bị thực tế.",
                    "Quản lý mã nguồn và hợp nhất thay đổi với Git.",
                    "Bảo trì và cập nhật ứng dụng trên Google Play."
                ]
            }
        ]
    },
    {
        "Id": 11,
        "Name": "Lập trình di động trung bình với python",
        "Price": "26000000",
        "Disscount": 10,
        "MucDich": "mobile",
        "Language": "python",
        "Level": "medium",
        "Image": "Images/mobile-python.webp",
        "Title": "Xây Dựng Ứng Dụng Di Động Với Python: Học Lập Trình Trung Bình Từ Cơ Bản Đến Nâng Cao",
        "Description": "Khóa học này là hành trình lý tưởng cho những người muốn học lập trình di động bằng ngôn ngữ Python. Học viên sẽ được hướng dẫn qua từng bước, từ những kiến thức cơ bản như biến, điều kiện, và vòng lặp, đến những khái niệm nâng cao như xử lý sự kiện, giao diện người dùng, và kết nối dữ liệu. Thông qua nhiều dự án thực tế, họ sẽ xây dựng ứng dụng di động đa nền tảng linh hoạt và hiệu quả.",
        "During": 50,
        "FrequencyPerWeek": 3,
        "OpeningDate": "15/01/2024",
        "Studied": 21,
        "FeedBacks": [
            {
                "Id": 1,
                "UserName": "Nguyễn Nam",
                "Time": "12/01/2024",
                "Content": "Hay"
            },
            {
                "Id": 2,
                "UserName": "Nguyễn Chí",
                "Time": "22/11/2023",
                "Content": "Đẳng cấp"
            }
        ],
        "Stages": [
            {
                "Title": "Giới Thiệu và Cơ Bản với Python",
                "Duration": 3,
                "Headings": [
                    "Giới thiệu về ngôn ngữ lập trình Python.",
                    "Cú pháp cơ bản và cấu trúc chương trình Python.",
                    "Sử dụng Python trong lập trình di động."
                ]
            },
            {
                "Title": "Xây Dựng Ứng Dụng Di Động với Kivy",
                "Duration": 4,
                "Headings": [
                    "Cài đặt và cấu hình môi trường phát triển với Kivy.",
                    "Xây dựng ứng dụng di động đơn giản với Kivy.",
                    "Sử dụng các widget và layouts trong Kivy."
                ]
            },
            {
                "Title": "Giao Diện Người Dùng và Điều Hướng",
                "Duration": 3,
                "Headings": [
                    "Thiết kế giao diện người dùng với Kivy Language.",
                    "Xử lý sự kiện người dùng và tương tác với giao diện.",
                    "Điều hướng giữa các màn hình và chức năng."
                ]
            },
            {
                "Title": "Kết Nối Dữ Liệu và API",
                "Duration": 3,
                "Headings": [
                    "Gửi và nhận dữ liệu từ máy chủ sử dụng Requests.",
                    "Xử lý dữ liệu từ API và hiển thị trên ứng dụng.",
                    "Bảo mật và quản lý dữ liệu trong ứng dụng di động."
                ]
            },
            {
                "Title": "Lưu Trữ và Quản Lý Dữ Liệu Nội Bộ",
                "Duration": 3,
                "Headings": [
                    "Lưu trữ dữ liệu nội bộ trên thiết bị sử dụng SQLite.",
                    "Thực hiện các thao tác CRUD (Create, Read, Update, Delete).",
                    "Optimizing performance và quản lý bộ nhớ."
                ]
            },
            {
                "Title": "Testing và Debugging",
                "Duration": 3,
                "Headings": [
                    "Viết và chạy unit tests cho ứng dụng.",
                    "Debugging và sửa lỗi trong mã nguồn.",
                    "Testing trên nhiều thiết bị và môi trường khác nhau."
                ]
            },
            {
                "Title": "Triển Khai và Phân Phối Ứng Dụng",
                "Duration": 3,
                "Headings": [
                    "Triển khai ứng dụng di động lên các nền tảng như Android và iOS.",
                    "Xử lý vấn đề liên quan đến triển khai và cập nhật.",
                    "Quản lý cửa hàng ứng dụng và phân phối ứng dụng."
                ]
            }
        ]
    },
    {
        "Id": 12,
        "Name": "Lập trình di động với C#",
        "Price": "27000000",
        "Disscount": 50,
        "MucDich": "mobile",
        "Language": "c#",
        "Level": "medium",
        "Image": "Images/mobile-cs.jpg",
        "Title": "Chinh Phục Lập Trình Di Động với C#: Xây Dựng Ứng Dụng Đa Nền Tảng Hiệu Quả và Linh Hoạt Chinh Phục Lập Trình Di Động với C#: Xây Dựng Ứng Dụng Đa Nền Tảng Hiệu Quả và Linh Hoạt Chinh Phục Lập Trình Di Động với C#: Xây Dựng Ứng Dụng Đa Nền Tảng Hiệu Quả và Linh Hoạt.",
        "Description": "Khóa học này là lựa chọn tuyệt vời cho những người muốn làm quen với lập trình di động bằng ngôn ngữ C#. Học viên sẽ được hướng dẫn qua những kiến thức cơ bản như cú pháp, đối tượng, và xử lý sự kiện, đến những khái niệm nâng cao như thiết kế giao diện người dùng, xử lý dữ liệu, và triển khai ứng dụng. Qua nhiều dự án thực tế, họ sẽ xây dựng ứng dụng di động đa nền tảng với hiệu suất và linh hoạt cao. Chinh Phục Lập Trình Di Động với C#: Xây Dựng Ứng Dụng Đa Nền Tảng Hiệu Quả và Linh Hoạt Chinh Phục Lập Trình Di Động với C#: Xây Dựng Ứng Dụng Đa Nền Tảng Hiệu Quả và Linh Hoạt.",
        "During": 50,
        "FrequencyPerWeek": 3,
        "OpeningDate": "15/01/2024",
        "Studied": 110,
        "FeedBacks": [
            {
                "Id": 1,
                "UserName": "Nguyễn Nam",
                "Time": "12/01/2024",
                "Content": "Hay"
            },
            {
                "Id": 2,
                "UserName": "Nguyễn Chí",
                "Time": "22/11/2023",
                "Content": "Đẳng cấp"
            },
            {
                "Id": 3,
                "UserName": "Nguyễn Tưởng",
                "Time": "11/10/2023",
                "Content": "Víp pro man"
            },
            {
                "Id": 4,
                "UserName": "Phùng Đồng",
                "Time": "02/07/2023",
                "Content": "Tạm"
            },
            {
                "Id": 5,
                "UserName": "Tạ Kiên",
                "Time": "01/03/2023",
                "Content": "Khóa hoc này đã cứu cuộc đời của tôi, gia đinh tôi đã có áo để mặc, có cơm để ăn"
            },
            {
                "Id": 6,
                "UserName": "Nguyễn Nguyễn",
                "Time": "02/05/2023",
                "Content": "Thật ý nghĩa"
            }
        ],
        "Stages": [
            {
                "Title": "Giới Thiệu và Cơ Bản với C#",
                "Duration": 3,
                "Headings": [
                    "Giới thiệu về ngôn ngữ lập trình C#.",
                    "Cú pháp cơ bản và cấu trúc chương trình C#.",
                    "Sử dụng C# trong lập trình di động."
                ]
            },
            {
                "Title": "Xây Dựng Ứng Dụng Di Động với Xamarin.Forms",
                "Duration": 4,
                "Headings": [
                    "Cài đặt và cấu hình môi trường phát triển với Xamarin.",
                    "Xây dựng ứng dụng di động đa nền tảng với Xamarin.Forms.",
                    "Tạo giao diện người dùng chung cho iOS và Android."
                ]
            },
            {
                "Title": "Giao Diện Người Dùng và Điều Hướng",
                "Duration": 3,
                "Headings": [
                    "Thiết kế giao diện người dùng đa nền tảng với XAML.",
                    "Xử lý sự kiện người dùng và tương tác với giao diện.",
                    "Điều hướng giữa các màn hình và chức năng."
                ]
            },
            {
                "Title": "Kết Nối Dữ Liệu và API",
                "Duration": 3,
                "Headings": [
                    "Gửi và nhận dữ liệu từ máy chủ sử dụng HttpClient.",
                    "Xử lý dữ liệu từ API và hiển thị trên ứng dụng.",
                    "Bảo mật và quản lý dữ liệu trong ứng dụng di động."
                ]
            },
            {
                "Title": "Lưu Trữ và Quản Lý Dữ Liệu Nội Bộ",
                "Duration": 3,
                "Headings": [
                    "Lưu trữ dữ liệu nội bộ trên thiết bị sử dụng SQLite.",
                    "Thực hiện các thao tác CRUD (Create, Read, Update, Delete).",
                    "Optimizing performance và quản lý bộ nhớ."
                ]
            },
            {
                "Title": "Testing và Debugging",
                "Duration": 3,
                "Headings": [
                    "Viết và chạy unit tests cho ứng dụng.",
                    "Debugging và sửa lỗi trong mã nguồn.",
                    "Testing trên nhiều thiết bị và môi trường khác nhau."
                ]
            },
            {
                "Title": "Triển Khai và Phân Phối Ứng Dụng",
                "Duration": 3,
                "Headings": [
                    "Triển khai ứng dụng di động lên cửa hàng ứng dụng.",
                    "Xử lý vấn đề liên quan đến triển khai và cập nhật.",
                    "Quản lý cửa hàng ứng dụng và phân phối ứng dụng."
                ]
            }
        ]
    },
    {
        "Id": 13,
        "Name": "Lập trình di động trung bình với Kotlin",
        "Price": "28000000",
        "Disscount": 50,
        "MucDich": "mobile",
        "Language": "kotlin",
        "Level": "medium",
        "Image": "Images/mobile-kotlin.png",
        "Title": "Học Lập Trình Di Động với Kotlin: Xây Dựng Ứng Dụng Trung Bình Hiệu Quả và Linh Hoạt, Học Lập Trình Di Động với Kotlin: Xây Dựng Ứng Dụng Trung Bình Hiệu Quả và Linh Hoạt, Học Lập Trình Di Động với Kotlin: Xây Dựng Ứng Dụng Trung Bình Hiệu Quả và Linh Hoạt.",
        "Description": "Khóa học này là cơ hội tốt để tìm hiểu về lập trình di động bằng ngôn ngữ Kotlin. Học viên sẽ được hướng dẫn qua những kiến thức cơ bản như cú pháp, đối tượng, và xử lý sự kiện, rồi chuyển sang những khái niệm nâng cao như thiết kế giao diện người dùng, xử lý dữ liệu, và triển khai ứng dụng. Qua nhiều dự án thực tế, họ sẽ xây dựng ứng dụng di động đa nền tảng với hiệu suất và linh hoạt cao. Học Lập Trình Di Động với Kotlin: Xây Dựng Ứng Dụng Trung Bình Hiệu Quả và Linh Hoạt. Học Lập Trình Di Động với Kotlin: Xây Dựng Ứng Dụng Trung Bình Hiệu Quả và Linh Hoạt.",
        "During": 45,
        "FrequencyPerWeek": 3,
        "OpeningDate": "16/05/2024",
        "Studied": 110,
        "FeedBacks": [
            {
                "Id": 1,
                "UserName": "Nguyễn Nam",
                "Time": "12/01/2024",
                "Content": "Hay"
            },
            {
                "Id": 2,
                "UserName": "Nguyễn Chí",
                "Time": "22/11/2023",
                "Content": "Đẳng cấp"
            },
            {
                "Id": 3,
                "UserName": "Nguyễn Tưởng",
                "Time": "11/10/2023",
                "Content": "Víp pro man"
            },
            {
                "Id": 4,
                "UserName": "Phùng Đồng",
                "Time": "02/07/2023",
                "Content": "Tạm"
            },
            {
                "Id": 5,
                "UserName": "Tạ Kiên",
                "Time": "01/03/2023",
                "Content": "Khóa hoc này đã cứu cuộc đời của tôi, gia đinh tôi đã có áo để mặc, có cơm để ăn"
            },
            {
                "Id": 6,
                "UserName": "Nguyễn Nguyễn",
                "Time": "02/05/2023",
                "Content": "Thật ý nghĩa"
            }
        ],
        "Stages": [
            {
                "Title": "Giới Thiệu và Cơ Bản với Kotlin",
                "Duration": 3,
                "Headings": [
                    "Giới thiệu về ngôn ngữ lập trình Kotlin.",
                    "Cú pháp cơ bản và cấu trúc chương trình Kotlin.",
                    "Sử dụng Kotlin trong lập trình di động."
                ]
            },
            {
                "Title": "Xây Dựng Ứng Dụng Di Động với Android Studio",
                "Duration": 4,
                "Headings": [
                    "Cài đặt và cấu hình môi trường phát triển Android với Kotlin.",
                    "Xây dựng ứng dụng di động đơn giản với Android Studio.",
                    "Sử dụng Activities và Fragments trong ứng dụng Android với Kotlin."
                ]
            },
            {
                "Title": "Giao Diện Người Dùng và Điều Hướng",
                "Duration": 3,
                "Headings": [
                    "Thiết kế giao diện người dùng với XML và Kotlin.",
                    "Xử lý sự kiện người dùng và tương tác với giao diện.",
                    "Điều hướng giữa các màn hình và chức năng."
                ]
            },
            {
                "Title": "Kết Nối Dữ Liệu và API",
                "Duration": 3,
                "Headings": [
                    "Gửi và nhận dữ liệu từ máy chủ sử dụng Retrofit hoặc ktx.",
                    "Xử lý dữ liệu từ API và hiển thị trên ứng dụng.",
                    "Bảo mật và quản lý dữ liệu trong ứng dụng di động với Kotlin."
                ]
            },
            {
                "Title": "Lưu Trữ và Quản Lý Dữ Liệu Nội Bộ",
                "Duration": 3,
                "Headings": [
                    "Lưu trữ dữ liệu nội bộ trên thiết bị sử dụng Room Persistence Library.",
                    "Thực hiện các thao tác CRUD (Create, Read, Update, Delete).",
                    "Optimizing performance và quản lý bộ nhớ trong ứng dụng Kotlin."
                ]
            },
            {
                "Title": "Testing và Debugging",
                "Duration": 3,
                "Headings": [
                    "Viết và chạy unit tests cho ứng dụng di động với Kotlin.",
                    "Debugging và sửa lỗi trong mã nguồn.",
                    "Testing trên nhiều thiết bị và môi trường khác nhau."
                ]
            },
            {
                "Title": "Triển Khai và Phân Phối Ứng Dụng",
                "Duration": 3,
                "Headings": [
                    "Triển khai ứng dụng di động lên Google Play.",
                    "Xử lý vấn đề liên quan đến triển khai và cập nhật.",
                    "Quản lý cửa hàng ứng dụng và phân phối ứng dụng Kotlin."
                ]
            }
        ]
    },
    {
        "Id": 14,
        "Name": "Lập trình di động cao cấp với Java",
        "Price": "29000000",
        "Disscount": 30,
        "MucDich": "mobile",
        "Language": "java",
        "Level": "high",
        "Image": "Images/mobile-java.jpg",
        "Title": "Vươn Tới Đỉnh Cao Lập Trình Di Động với Java: Xây Dựng Ứng Dụng Cao Cấp và Phức Tạp, Vươn Tới Đỉnh Cao Lập Trình Di Động với Java: Xây Dựng Ứng Dụng Cao Cấp và Phức Tạp, Vươn Tới Đỉnh Cao Lập Trình Di Động với Java: Xây Dựng Ứng Dụng Cao Cấp và Phức Tạp.",
        "Description": "Khóa học này dành cho những lập trình viên đã có kinh nghiệm muốn chinh phục những thách thức cao cấp trong lập trình di động bằng ngôn ngữ Java. Học viên sẽ nắm vững các khái niệm như kiến trúc ứng dụng, quản lý dữ liệu, và tối ưu hóa hiệu suất. Thông qua các dự án thực tế, họ sẽ xây dựng những ứng dụng di động cao cấp đáp ứng mọi yêu cầu của người dùng. Khóa học này dành cho những lập trình viên đã có kinh nghiệm muốn chinh phục những thách thức cao cấp trong lập trình di động bằng ngôn ngữ Java. Học viên sẽ nắm vững các khái niệm như kiến trúc ứng dụng, quản lý dữ liệu, và tối ưu hóa hiệu suất. Thông qua các dự án thực tế, họ sẽ xây dựng những ứng dụng di động cao cấp đáp ứng mọi yêu cầu của người dùng. Khóa học này dành cho những lập trình viên đã có kinh nghiệm muốn chinh phục những thách thức cao cấp trong lập trình di động bằng ngôn ngữ Java. Học viên sẽ nắm vững các khái niệm như kiến trúc ứng dụng, quản lý dữ liệu, và tối ưu hóa hiệu suất. Thông qua các dự án thực tế, họ sẽ xây dựng những ứng dụng di động cao cấp đáp ứng mọi yêu cầu của người dùng.",
        "During": 45,
        "FrequencyPerWeek": 3,
        "OpeningDate": "16/05/2024",
        "Studied": 30,
        "FeedBacks": [
            {
                "Id": 1,
                "UserName": "Nguyễn Nam",
                "Time": "12/01/2024",
                "Content": "Hay"
            },
            {
                "Id": 2,
                "UserName": "Nguyễn Chí",
                "Time": "22/11/2023",
                "Content": "Đẳng cấp"
            },
            {
                "Id": 3,
                "UserName": "Nguyễn Tưởng",
                "Time": "11/10/2023",
                "Content": "Víp pro man"
            },
            {
                "Id": 4,
                "UserName": "Phùng Đồng",
                "Time": "02/07/2023",
                "Content": "Tạm"
            }
        ],
        "Stages": [
            {
                "Title": "Nâng Cao Kiến Thức Java",
                "Duration": 3,
                "Headings": [
                    "Tổng lại kiến thức cơ bản về Java.",
                    "Tìm hiểu về các tính năng nâng cao của ngôn ngữ.",
                    "Sử dụng Java trong bối cảnh lập trình di động."
                ]
            },
            {
                "Title": "Phát Triển Ứng Dụng Android Hiện Đại",
                "Duration": 4,
                "Headings": [
                    "Áp dụng kiến thức Java vào phát triển ứng dụng Android.",
                    "Sử dụng các thư viện và frameworks phổ biến.",
                    "Tối ưu hóa hiệu suất và trải nghiệm người dùng."
                ]
            },
            {
                "Title": "Kỹ Thuật Phát Triển Ứng Dụng Di Động Đa Nền Tảng",
                "Duration": 3,
                "Headings": [
                    "Xây dựng ứng dụng di động đa nền tảng với Kotlin Multiplatform.",
                    "Tối ưu hóa mã nguồn cho sự linh hoạt và bảo trì.",
                    "Triển khai ứng dụng trên nhiều hệ điều hành."
                ]
            },
            {
                "Title": "Bảo Mật và Quản Lý Dữ Liệu",
                "Duration": 3,
                "Headings": [
                    "Áp dụng biện pháp bảo mật trong ứng dụng di động.",
                    "Quản lý dữ liệu và tương tác với cơ sở dữ liệu.",
                    "Đối mặt với thách thức an ninh và quyền riêng tư."
                ]
            },
            {
                "Title": "Testing và Triển Khai",
                "Duration": 3,
                "Headings": [
                    "Viết và thực hiện bài kiểm tra cho ứng dụng.",
                    "Debugging và xử lý lỗi.",
                    "Triển khai ứng dụng lên các cửa hàng ứng dụng."
                ]
            }
        ]
    },
    {
        "Id": 15,
        "Name": "Lập trình di động cho người mất gốc với python",
        "Price": "30000000",
        "Disscount": 50,
        "MucDich": "mobile",
        "Language": "python",
        "Level": "medium",
        "Image": "Images/mobile-python.webp",
        "Title": "Bắt Kịp Lập Trình Di Động với Python: Hành Trình Dành Cho Người Mất Gốc, Bắt Kịp Lập Trình Di Động với Python: Hành Trình Dành Cho Người Mất Gốc, Bắt Kịp Lập Trình Di Động với Python: Hành Trình Dành Cho Người Mất Gốc.",
        "Description": "Khóa học này được thiết kế đặc biệt cho những người mất gốc về lập trình muốn khám phá thế giới của lập trình di động bằng ngôn ngữ Python. Học viên sẽ bắt đầu từ những kiến thức cơ bản nhất, dần dần chuyển sang những khái niệm nâng cao như xử lý sự kiện, giao diện người dùng, và kết nối dữ liệu. Qua nhiều dự án thực tế, họ sẽ xây dựng ứng dụng di động đơn giản và hiệu quả. Bắt Kịp Lập Trình Di Động với Python: Hành Trình Dành Cho Người Mất Gốc. Bắt Kịp Lập Trình Di Động với Python: Hành Trình Dành Cho Người Mất Gốc, Bắt Kịp Lập Trình Di Động với Python: Hành Trình Dành Cho Người Mất Gốc.",
        "During": 45,
        "FrequencyPerWeek": 3,
        "OpeningDate": "16/05/2024",
        "Studied": 99,
        "FeedBacks": [
            {
                "Id": 1,
                "UserName": "Nguyễn Nam",
                "Time": "12/01/2024",
                "Content": "Hay"
            },
            {
                "Id": 2,
                "UserName": "Nguyễn Chí",
                "Time": "22/11/2023",
                "Content": "Đẳng cấp"
            },
            {
                "Id": 3,
                "UserName": "Nguyễn Tưởng",
                "Time": "11/10/2023",
                "Content": "Víp pro man"
            },
            {
                "Id": 4,
                "UserName": "Phùng Đồng",
                "Time": "02/07/2023",
                "Content": "Tạm"
            },
            {
                "Id": 5,
                "UserName": "Tạ Kiên",
                "Time": "01/03/2023",
                "Content": "Khóa hoc này đã cứu cuộc đời của tôi, gia đinh tôi đã có áo để mặc, có cơm để ăn"
            }
        ],
        "Stages": [
            {
                "Title": "Nâng Cao Kiến Thức Python",
                "Duration": 4,
                "Headings": [
                    "Tổng lại kiến thức cơ bản về Python.",
                    "Học cách sử dụng Python trong lập trình di động.",
                    "Áp dụng Python cho phát triển ứng dụng di động."
                ]
            },
            {
                "Title": "Xây Dựng Ứng Dụng Di Động Cơ Bản",
                "Duration": 3,
                "Headings": [
                    "Phát triển ứng dụng di động đơn giản sử dụng Python.",
                    "Hiểu về giao diện người dùng và tương tác cơ bản.",
                    "Thực hành xây dựng ứng dụng từ đầu đến cuối."
                ]
            },
            {
                "Title": "Tối Ưu Hóa và Bảo Trì",
                "Duration": 3,
                "Headings": [
                    "Tối ưu hóa hiệu suất và tài nguyên của ứng dụng.",
                    "Xử lý và sửa lỗi trong mã nguồn Python.",
                    "Bảo trì và cập nhật ứng dụng di động."
                ]
            }
        ]
    },
    {
        "Id": 16,
        "Name": "Khoa học dữ liệu trung bình với python",
        "Price": "33000000",
        "Disscount": 54,
        "MucDich": "data-science",
        "Language": "python",
        "Level": "medium",
        "Image": "Images/datascience-python2.jpg",
        "Title": "Khám Phá Thế Giới Khoa Học Dữ Liệu với Python: Xây Dựng Kiến Thức Trung Bình Từ Lý Thuyết Đến Thực Hành, Khám Phá Thế Giới Khoa Học Dữ Liệu với Python: Xây Dựng Kiến Thức Trung Bình Từ Lý Thuyết Đến Thực Hành, Khám Phá Thế Giới Khoa Học Dữ Liệu với Python: Xây Dựng Kiến Thức Trung Bình Từ Lý Thuyết Đến Thực Hành.",
        "Description": "Khóa học này tập trung vào việc giảng dạy khoa học dữ liệu với sự hỗ trợ của ngôn ngữ lập trình Python. Học viên sẽ bắt đầu từ việc hiểu lý thuyết cơ bản như xử lý dữ liệu, thống kê, và máy học, rồi chuyển sang những dự án thực tế để áp dụng kiến thức đã học. Qua khóa học, họ sẽ phát triển khả năng phân tích dữ liệu và đưa ra quyết định thông minh dựa trên dữ liệu. Khám Phá Thế Giới Khoa Học Dữ Liệu với Python: Xây Dựng Kiến Thức Trung Bình Từ Lý Thuyết Đến Thực Hành, Khám Phá Thế Giới Khoa Học Dữ Liệu với Python: Xây Dựng Kiến Thức Trung Bình Từ Lý Thuyết Đến Thực Hành, Khám Phá Thế Giới Khoa Học Dữ Liệu với Python: Xây Dựng Kiến Thức Trung Bình Từ Lý Thuyết Đến Thực Hành.",
        "During": 45,
        "FrequencyPerWeek": 3,
        "OpeningDate": "01/01/2023",
        "Studied": 88,
        "FeedBacks": [
            {
                "Id": 3,
                "UserName": "Nguyễn Tưởng",
                "Time": "11/10/2023",
                "Content": "Víp pro man"
            },
            {
                "Id": 4,
                "UserName": "Phùng Đồng",
                "Time": "02/07/2023",
                "Content": "Tạm"
            },
            {
                "Id": 5,
                "UserName": "Tạ Kiên",
                "Time": "01/03/2023",
                "Content": "Khóa hoc này đã cứu cuộc đời của tôi, gia đinh tôi đã có áo để mặc, có cơm để ăn"
            },
            {
                "Id": 6,
                "UserName": "Nguyễn Nguyễn",
                "Time": "02/05/2023",
                "Content": "Thật ý nghĩa"
            }
        ],
        "Stages": [
            {
                "Title": "Nền Tảng Khoa Học Dữ Liệu với Python",
                "Duration": 3,
                "Headings": [
                    "Giới thiệu về khoa học dữ liệu và Python.",
                    "Cài đặt môi trường làm việc khoa học dữ liệu.",
                    "Sử dụng các thư viện chính như NumPy và Pandas."
                ]
            },
            {
                "Title": "Trực Quan Hóa Dữ Liệu với Matplotlib và Seaborn",
                "Duration": 3,
                "Headings": [
                    "Tạo đồ thị và biểu đồ sử dụng Matplotlib.",
                    "Sử dụng thư viện Seaborn để trực quan hóa dữ liệu.",
                    "Tổ chức và hiển thị thông tin một cách hiệu quả."
                ]
            },
            {
                "Title": "Phân Tích Thống Kê và Machine Learning Cơ Bản",
                "Duration": 4,
                "Headings": [
                    "Áp dụng phân tích thống kê cơ bản cho dữ liệu.",
                    "Hiểu về machine learning và ứng dụng cơ bản.",
                    "Sử dụng thư viện scikit-learn trong machine learning."
                ]
            },
            {
                "Title": "Xử Lý Dữ Liệu Lớn với Pandas và Dask",
                "Duration": 3,
                "Headings": [
                    "Xử lý dữ liệu lớn và tăng tốc với Dask.",
                    "Sử dụng Pandas cho xử lý và biến đổi dữ liệu.",
                    "Hiểu về ưu điểm và thách thức khi làm việc với dữ liệu lớn."
                ]
            },
            {
                "Title": "Dự Án Thực Tế và Ứng Dụng Khoa Học Dữ Liệu",
                "Duration": 4,
                "Headings": [
                    "Thực hiện dự án khoa học dữ liệu từ đầu đến cuối.",
                    "Áp dụng machine learning trong bối cảnh thực tế.",
                    "Tối ưu hóa và triển khai mô hình khoa học dữ liệu."
                ]
            }
        ]
    },
    {
        "Id": 17,
        "Name": "Khoa học dữ liệu cao cấp với python",
        "Price": "34000000",
        "Disscount": 45,
        "MucDich": "data-science",
        "Language": "python",
        "Level": "high",
        "Image": "Images/datascience-python3.png",
        "Title": "Chinh Phục Khoa Học Dữ Liệu với Python: Học Sâu và Nâng Cao Kiến Thức, Chinh Phục Khoa Học Dữ Liệu với Python: Học Sâu và Nâng Cao Kiến Thức. Chinh Phục Khoa Học Dữ Liệu với Python: Học Sâu và Nâng Cao Kiến Thức.",
        "Description": "Khóa học này là lựa chọn tuyệt vời cho những người muốn phát triển sâu về khoa học dữ liệu bằng ngôn ngữ Python. Học viên sẽ nắm vững các phương pháp và công cụ mạnh mẽ trong xử lý dữ liệu lớn, học máy sâu, và trí tuệ nhân tạo. Thông qua các dự án thực tế, họ sẽ áp dụng kiến thức vào việc giải quyết những vấn đề phức tạp trong thế giới thực. Chinh Phục Khoa Học Dữ Liệu với Python: Học Sâu và Nâng Cao Kiến Thức Chinh Phục Khoa Học Dữ Liệu với Python: Học Sâu và Nâng Cao Kiến Thức, Chinh Phục Khoa Học Dữ Liệu với Python: Học Sâu và Nâng Cao Kiến Thức.",
        "During": 45,
        "FrequencyPerWeek": 3,
        "OpeningDate": "22/07/2024",
        "Studied": 77,
        "FeedBacks": [
            {
                "Id": 5,
                "UserName": "Tạ Kiên",
                "Time": "01/03/2023",
                "Content": "Khóa hoc này đã cứu cuộc đời của tôi, gia đinh tôi đã có áo để mặc, có cơm để ăn"
            },
            {
                "Id": 6,
                "UserName": "Nguyễn Nguyễn",
                "Time": "02/05/2023",
                "Content": "Thật ý nghĩa"
            }
        ],
        "Stages": [
            {
                "Title": "Nền Tảng Khoa Học Dữ Liệu và Công Cụ Nâng Cao",
                "Duration": 4,
                "Headings": [
                    "Đánh giá và cập nhật kiến thức cơ bản về khoa học dữ liệu.",
                    "Sử dụng công cụ nâng cao như Jupyter Notebooks và VS Code.",
                    "Tối ưu hóa môi trường làm việc và quy trình làm việc."
                ]
            },
            {
                "Title": "Trực Quan Hóa và Phân Tích Dữ Liệu Sâu Rộng",
                "Duration": 3,
                "Headings": [
                    "Sử dụng thư viện trực quan hóa như Plotly và Bokeh.",
                    "Phân tích dữ liệu sâu rộng và phức tạp.",
                    "Xử lý và biến đổi dữ liệu để đáp ứng yêu cầu phân tích."
                ]
            },
            {
                "Title": "Machine Learning và Deep Learning",
                "Duration": 4,
                "Headings": [
                    "Áp dụng các thuật toán machine learning cơ bản.",
                    "Nắm vững deep learning và sử dụng framework như TensorFlow và PyTorch.",
                    "Xây dựng và đánh giá mô hình machine learning và deep learning."
                ]
            },
            {
                "Title": "Xử Lý Dữ Liệu Lớn và Hệ Thống Phân Tán",
                "Duration": 3,
                "Headings": [
                    "Sử dụng công nghệ xử lý dữ liệu lớn như Apache Spark.",
                    "Hiểu về hệ thống phân tán và cách tích hợp chúng trong khoa học dữ liệu.",
                    "Xử lý dữ liệu lớn và đảm bảo hiệu suất tốt nhất."
                ]
            },
            {
                "Title": "Dự Án Nâng Cao và Ứng Dụng Khoa Học Dữ Liệu Trong Thực Tế",
                "Duration": 4,
                "Headings": [
                    "Thực hiện dự án khoa học dữ liệu phức tạp và toàn diện.",
                    "Ứng dụng khoa học dữ liệu trong các lĩnh vực cụ thể.",
                    "Tối ưu hóa và triển khai mô hình cho ứng dụng thực tế."
                ]
            }
        ]
    },
    {
        "Id": 18,
        "Name": "Khoa học dữ liệu cơ bản với python",
        "Price": "35000000",
        "Disscount": 32,
        "MucDich": "data-science",
        "Language": "python",
        "Level": "basic",
        "Image": "Images/dataScience-python.jpg",
        "Title": "Khám Phá Khoa Học Dữ Liệu với Python: Học Cơ Bản và Áp Dụng Trực Tiếp, Khám Phá Khoa Học Dữ Liệu với Python: Học Cơ Bản và Áp Dụng Trực Tiếp, Khám Phá Khoa Học Dữ Liệu với Python: Học Cơ Bản và Áp Dụng Trực Tiếp.",
        "Description": "Khóa học này là sự khám phá tuyệt vời cho những người mới bắt đầu học về khoa học dữ liệu bằng ngôn ngữ lập trình Python. Học viên sẽ được giới thiệu với những khái niệm cơ bản như xử lý dữ liệu, thống kê, và trực quan hóa dữ liệu. Thông qua các bài lab và dự án thực tế, họ sẽ tự tay thực hành và áp dụng kiến thức đã học vào việc giải quyết vấn đề. Khám Phá Khoa Học Dữ Liệu với Python: Học Cơ Bản và Áp Dụng Trực Tiếp, Khám Phá Khoa Học Dữ Liệu với Python: Học Cơ Bản và Áp Dụng Trực Tiếp.",
        "During": 45,
        "FrequencyPerWeek": 3,
        "OpeningDate": "01/01/2023",
        "Studied": 33,
        "FeedBacks": [
            {
                "Id": 2,
                "UserName": "Nguyễn Chí",
                "Time": "22/11/2023",
                "Content": "Đẳng cấp"
            },
            {
                "Id": 3,
                "UserName": "Nguyễn Tưởng",
                "Time": "11/10/2023",
                "Content": "Víp pro man"
            },
            {
                "Id": 4,
                "UserName": "Phùng Đồng",
                "Time": "02/07/2023",
                "Content": "Tạm"
            }
        ],
        "Stages": [
            {
                "Title": "Giới Thiệu về Khoa Học Dữ Liệu và Python",
                "Duration": 3,
                "Headings": [
                    "Định nghĩa và phạm vi của khoa học dữ liệu.",
                    "Cài đặt môi trường làm việc với Python.",
                    "Sử dụng các thư viện cơ bản như NumPy và Pandas."
                ]
            },
            {
                "Title": "Trực Quan Hóa và Hiểu Quả Hóa Dữ Liệu",
                "Duration": 3,
                "Headings": [
                    "Tạo đồ thị và biểu đồ với Matplotlib và Seaborn.",
                    "Áp dụng kỹ thuật trực quan hóa để hiểu dữ liệu.",
                    "Sử dụng các công cụ trực quan hóa khác như Plotly."
                ]
            },
            {
                "Title": "Phân Tích Thống Kê và Xử Lý Dữ Liệu",
                "Duration": 4,
                "Headings": [
                    "Áp dụng phân tích thống kê cơ bản.",
                    "Xử lý và biến đổi dữ liệu với Pandas.",
                    "Hiểu về các phương pháp xử lý dữ liệu cơ bản."
                ]
            },
            {
                "Title": "Machine Learning Cơ Bản với Scikit-Learn",
                "Duration": 3,
                "Headings": [
                    "Giới thiệu về machine learning và ứng dụng cơ bản.",
                    "Sử dụng thư viện Scikit-Learn cho machine learning.",
                    "Xây dựng và đánh giá mô hình machine learning đơn giản."
                ]
            },
            {
                "Title": "Dự Án Thực Hành và Ứng Dụng Khoa Học Dữ Liệu",
                "Duration": 4,
                "Headings": [
                    "Thực hiện dự án thực hành từ đầu đến cuối.",
                    "Áp dụng các kỹ thuật khoa học dữ liệu vào vấn đề cụ thể.",
                    "Tổng hợp kiến thức và kỹ năng trong dự án thực tế."
                ]
            }
        ]
    },
    {
        "Id": 19,
        "Name": "Khoa học dữ liệu cơ bản với python",
        "Price": "35000000",
        "Disscount": 23,
        "MucDich": "data-science",
        "Language": "python",
        "Level": "basic",
        "Image": "Images/dataScience-python.jpg",
        "Title": "Khám Phá Khoa Học Dữ Liệu với Python: Học Cơ Bản và Áp Dụng Trực Tiếp, Khám Phá Khoa Học Dữ Liệu với Python: Học Cơ Bản và Áp Dụng Trực Tiếp, Khám Phá Khoa Học Dữ Liệu với Python: Học Cơ Bản và Áp Dụng Trực Tiếp.",
        "Description": "Khóa học này là sự khám phá tuyệt vời cho những người mới bắt đầu học về khoa học dữ liệu bằng ngôn ngữ lập trình Python. Học viên sẽ được giới thiệu với những khái niệm cơ bản như xử lý dữ liệu, thống kê, và trực quan hóa dữ liệu. Thông qua các bài lab và dự án thực tế, họ sẽ tự tay thực hành và áp dụng kiến thức đã học vào việc giải quyết vấn đề. Khám Phá Khoa Học Dữ Liệu với Python: Học Cơ Bản và Áp Dụng Trực Tiếp, Khám Phá Khoa Học Dữ Liệu với Python: Học Cơ Bản và Áp Dụng Trực Tiếp.",
        "During": 45,
        "FrequencyPerWeek": 3,
        "OpeningDate": "22/07/2024",
        "Studied": 110,
        "FeedBacks": [
            {
                "Id": 1,
                "UserName": "Nguyễn Nam",
                "Time": "12/01/2024",
                "Content": "Hay"
            },
            {
                "Id": 2,
                "UserName": "Nguyễn Chí",
                "Time": "22/11/2023",
                "Content": "Đẳng cấp"
            },
            {
                "Id": 3,
                "UserName": "Nguyễn Tưởng",
                "Time": "11/10/2023",
                "Content": "Víp pro man"
            },
            {
                "Id": 4,
                "UserName": "Phùng Đồng",
                "Time": "02/07/2023",
                "Content": "Tạm"
            },
            {
                "Id": 5,
                "UserName": "Tạ Kiên",
                "Time": "01/03/2023",
                "Content": "Khóa hoc này đã cứu cuộc đời của tôi, gia đinh tôi đã có áo để mặc, có cơm để ăn"
            },
            {
                "Id": 6,
                "UserName": "Nguyễn Nguyễn",
                "Time": "02/05/2023",
                "Content": "Thật ý nghĩa"
            },
            {
                "Id": 7,
                "UserName": "Nguyễn Tưởng",
                "Time": "11/11/2023",
                "Content": "Víp pro man"
            },
            {
                "Id": 8,
                "UserName": "Phùng Đồng",
                "Time": "02/09/2023",
                "Content": "Tạm"
            },
            {
                "Id": 9,
                "UserName": "Tạ Kiên",
                "Time": "01/07/2023",
                "Content": "Khóa hoc này đã cứu cuộc đời của tôi, gia đinh tôi đã có áo để mặc, có cơm để ăn"
            },
            {
                "Id": 10,
                "UserName": "Nguyễn Nguyễn",
                "Time": "02/09/2023",
                "Content": "Thật ý nghĩa"
            }
        ],
        "Stages": [
            {
                "Title": "Giới Thiệu về Khoa Học Dữ Liệu và Python",
                "Duration": 3,
                "Headings": [
                    "Định nghĩa và phạm vi của khoa học dữ liệu.",
                    "Cài đặt môi trường làm việc với Python.",
                    "Sử dụng các thư viện cơ bản như NumPy và Pandas."
                ]
            },
            {
                "Title": "Trực Quan Hóa và Hiểu Quả Hóa Dữ Liệu",
                "Duration": 3,
                "Headings": [
                    "Tạo đồ thị và biểu đồ với Matplotlib và Seaborn.",
                    "Áp dụng kỹ thuật trực quan hóa để hiểu dữ liệu.",
                    "Sử dụng các công cụ trực quan hóa khác như Plotly."
                ]
            },
            {
                "Title": "Phân Tích Thống Kê và Xử Lý Dữ Liệu",
                "Duration": 4,
                "Headings": [
                    "Áp dụng phân tích thống kê cơ bản.",
                    "Xử lý và biến đổi dữ liệu với Pandas.",
                    "Hiểu về các phương pháp xử lý dữ liệu cơ bản."
                ]
            },
            {
                "Title": "Machine Learning Cơ Bản với Scikit-Learn",
                "Duration": 3,
                "Headings": [
                    "Giới thiệu về machine learning và ứng dụng cơ bản.",
                    "Sử dụng thư viện Scikit-Learn cho machine learning.",
                    "Xây dựng và đánh giá mô hình machine learning đơn giản."
                ]
            },
            {
                "Title": "Dự Án Thực Hành và Ứng Dụng Khoa Học Dữ Liệu",
                "Duration": 4,
                "Headings": [
                    "Thực hiện dự án thực hành từ đầu đến cuối.",
                    "Áp dụng các kỹ thuật khoa học dữ liệu vào vấn đề cụ thể.",
                    "Tổng hợp kiến thức và kỹ năng trong dự án thực tế."
                ]
            }
        ]
    }
]
$(document).ready(function () {
    console.log("sadasdasdsa");
    LoadPage();

    for (let i = 1; i <= countStage; i++) {
        $("#click-toggle-" + i).click(function () {
            $("#display-toggle-" + i).toggle();

            if ($("#display-toggle-" + i).css("display") != "none") {
                $("#click-toggle-" + i + " img").prop("src", "Images/bx-down-icon.png");
            } else {
                $("#click-toggle-" + i + " img").prop("src", "Images/bx-right.png");
            }
        })
    }
});

function LoadPage() {
    console.log("sadasdasdsa");
    console.log(List_cources);
    debugger;
    var indexId = window.location.href.lastIndexOf("=") + 1;
    var id = parseInt(window.location.href.substring(indexId));
    var cource_infor = Array.from(List_cources).find(c => c.Id === id)

    let cource_heading = document.getElementsByClassName("detail-header")[0];
    cource_heading.textContent += cource_infor.Name;

    $(".detail_site .price span").text(ToVietNamDong(cource_infor.Price))
    var diss_price = cource_infor.Price * ((100 - cource_infor.Disscount) / 100);
    $(".detail_site .disccount-price span").text(ToVietNamDong(diss_price) + " (Giảm tới -" + cource_infor.Disscount + "%)")

    $(".detail_site .opening-date span").text(cource_infor.OpeningDate)

    $(".detail_main img").prop("src", cource_infor.Image)


    rendFeedBack(cource_infor.FeedBacks)

    $(".title").text(cource_infor.Title)
    $(".description").text(cource_infor.Description)
    $(".during span").text(cource_infor.During + " buổi")
    $(".frequencyPerWeek span").text(cource_infor.FrequencyPerWeek)

    rendStages(cource_infor.Stages);
}

function ChangeSelected(item, nthsection) {
    var lis = $(".last-category li").removeClass("selected-li");
    $(item).addClass("selected-li")

    $("#lotrinh").hide();
    $("#giaovien").hide();
    $("#feedback").hide();
    if (nthsection == 1) {
        $("#lotrinh").show();
    } else if (nthsection == 2) {
        $("#giaovien").show();
    } else {
        $("#feedback").show();
    }
}

function rendFeedBack(list_feedback) {
    var feedBacksection = document.getElementById("feedback");
    feedBacksection.innerHTML = "";
    for (let feedback of list_feedback) {
        feedBacksection.innerHTML += `<div>
                                        <p>Tên người dùng: <span>${feedback.UserName}</span></p>
                                        <p>Thời gian : <span>${feedback.Time}</span></p>
                                        <p>Bình luận: <span>${feedback.Content}</span></p>
                                    </div>`;
    }
}

function rendStages(stages) {
    var stages_section = document.getElementsByClassName("stages")[0];
    var index = 1;
    for (let stage of stages) {
        var stage_html = `<div>
            <h4 id="click-toggle-${index}" style="cursor:pointer"><i><img src="Images/bx-right.png" alt=""></i> Gia đoạn ${index}: ${stage.Title} (${stage.Duration} buổi)</h4>
            <ul id="display-toggle-${index}" style="display:none;">`

        var lis = ``;
        for (let heading of stage.Headings) {
            lis += `<li>+ ${heading}</li>`;
        }
        stage_html += lis;
        stage_html += `</ul>
        </div>`;
        stages_section.innerHTML += stage_html;

        console.log("#click-toggle-" + index)
        console.log("#display-toggle-" + index)

        countStage = index;
        index++;
    }

}

function ToVietNamDong(money) {
    let formatter = new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' });
    let formattedNumber = formatter.format(money);
    return formattedNumber;
}

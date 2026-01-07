import Logo from "../Logo";

const Footer = () => {
  return (
    <footer className="bg-deep-blue text-white py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
          <Logo isFooter={true} />
          <div className="text-pale-blue text-sm md:text-right">
            <p className="mb-2">대표: 홍길동 | 사업자등록번호: 000-00-00000</p>
            <p>주소: 서울특별시 강남구 테헤란로 123</p>
            <p>이메일: contact@icanstory.com</p>
          </div>
        </div>
        <div className="border-t border-gray-700 pt-8 text-center md:text-left text-gray-400 text-sm flex flex-col md:flex-row justify-between items-center gap-4">
          <p>Copyright © 2025 I CAN STORY. All rights reserved.</p>
          <p className="text-gray-600 text-xs">v2025.01.07 Update</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

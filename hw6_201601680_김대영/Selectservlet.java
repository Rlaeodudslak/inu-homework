package examples;


import java.io.IOException;
import java.io.PrintWriter;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.sql.PreparedStatement;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * Servlet implementation class Selectservlet
 */
@WebServlet("/Select")
public class Selectservlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public Selectservlet() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		doPost(request, response);
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		request.setCharacterEncoding("UTF-8");
		response.setContentType("text/html;charset=UTF-8");
		PrintWriter out = response.getWriter();
		out.print("<html><body>");
		
		String driver = "com.mysql.jdbc.Driver";
		String url ="jdbc:mysql://localhost:3306/testdb?&serverTimezone=UTC";
		String userid = "root";
		String passwd = "rlaeodud12";
		
		String emp_id = request.getParameter("emp_id");
		String ename = request.getParameter("ename");
		String salary = request.getParameter("salary");
		String depart = request.getParameter("depart");
		Connection con = null;
		Statement stmt = null;
		ResultSet rs = null;
		
		
		try{
			Class.forName(driver);
			con = DriverManager.getConnection(url,userid,passwd);
			String sql ="insert into emp values(?,?,?,?)";
			PreparedStatement pstmt = null;
			pstmt = con.prepareStatement(sql);
			pstmt.setString(1,emp_id);
			pstmt.setString(2,ename);
			pstmt.setString(3,salary);
			pstmt.setString(4,depart);
			pstmt.executeUpdate();
			pstmt.close();
			out.println("<script>alert('해당 정보가 MYSQL에 저장되엇습니다.');</script>");
			
		}
		catch(Exception e) {
			e.printStackTrace();
		}finally {
			try {
				if(rs!=null) rs.close();
				if(stmt!=null) stmt.close();
				if(con!=null) con.close();
				
			}
			catch(SQLException e) {
				e.printStackTrace();
			}
		}
		
		out.print("</body></html>");
	}
}

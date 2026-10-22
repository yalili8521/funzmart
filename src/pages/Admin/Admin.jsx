import { useState } from 'react';
import goodsList from '../../data/FunzyMartList';
import './Admin.css';

const Admin = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  // Calculate pagination
  const totalPages = Math.ceil(goodsList.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentProducts = goodsList.slice(startIndex, endIndex);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="admin-page">
      <div className="admin-layout">
        {/* Sidebar */}
        <aside className="admin-sidebar">
          <h2>Back-end management</h2>
          <button className="sidebar-btn active">Commodity</button>
        </aside>

        {/* Main Content */}
        <main className="admin-main">
          <div className="admin-header-section">
            <h1>商品管理</h1>
            <button className="add-product-btn">新增商品</button>
          </div>

          {/* Product Table */}
          <div className="product-table-container">
            <table className="product-table">
              <thead>
                <tr>
                  <th>名称</th>
                  <th>价格</th>
                  <th>类型</th>
                  <th>SKU</th>
                  <th>宽</th>
                  <th>高</th>
                  <th>长</th>
                  <th>重量</th>
                  <th>图片</th>
                  <th>修改</th>
                </tr>
              </thead>
              <tbody>
                {currentProducts.map((product) => (
                  <tr key={product.id}>
                    <td>{product.name}</td>
                    <td>{product.price}</td>
                    <td>{product.type}</td>
                    <td>{product.sku}</td>
                    <td>{product.details.width}</td>
                    <td>{product.details.height}</td>
                    <td>{product.details.length}</td>
                    <td>{product.details.weight}</td>
                    <td>
                      <img src={product.img} alt={product.name} className="product-thumbnail" />
                    </td>
                    <td>
                      <div className="action-buttons">
                        <button className="btn-modify">修改</button>
                        <button className="btn-delete">删除</button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="pagination">
            <button
              className="page-arrow"
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
            >
              &lt;
            </button>
            {[...Array(totalPages)].map((_, index) => (
              <button
                key={index + 1}
                className={`page-number ${currentPage === index + 1 ? 'active' : ''}`}
                onClick={() => handlePageChange(index + 1)}
              >
                {index + 1}
              </button>
            ))}
            <button
              className="page-arrow"
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
            >
              &gt;
            </button>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Admin;

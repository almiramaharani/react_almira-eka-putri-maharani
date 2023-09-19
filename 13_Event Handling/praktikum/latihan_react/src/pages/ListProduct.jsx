import React, { Component } from 'react';
import CreateProduct from "./CreateProduct";
import "./ListProduct.css";

// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";

const ProductTable = ({ tableData }) => {
    return (
        <>
                <div className='content-main text-center'>
                    <h2 className='page-title mt-3'>List Product</h2>
                    <table className='table-sm table-striped m-3'>
                        <thead style={{ boxShadow: "0px 1px 10px rgba(0,0,0,0.1)" }}>
                            <tr>
                                <th scope='col'>No</th>
                                <th scope='col'>Product Name</th>
                                <th scope='col'>Product Category</th>
                                <th scope='col'>Image of Product</th>
                                <th scope='col'>Product Freshness</th>
                                <th scope='col'>Additional Description</th>
                                <th scope='col'>Product Price</th>
                            </tr>
                        </thead>
                        <tbody>
                            {tableData.map((data, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{index+1}</td>
                                        <td>{data.ProductName}</td>
                                        <td>{data.ProductCategory}</td>
                                        <td>{data.ProductImage}</td>
                                        <td>{data.ProductFreshness}</td>
                                        <td>{data.AdditionalDescription}</td>
                                        <td>{data.ProductPrice}</td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            </>
    )
}

class ListProduct extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tableData: [],
            searchInput: '',
        };
    }

    addProductToTable = (product) => {
        this.setState((prevState) => ({
            tableData: [...prevState.tableData, product],
        }));
    }

    handleSearch = () => {
        
        const {searchInput} = this.state;
        
        if (searchInput === '') {
            alert("Please enter the keywords you want to search for!");
            return;
        }

        const result = this.state.tableData.find(data => data.ProductName === searchInput);
        alert(JSON.stringify(result ? result : "Product not found", null, 2));
        this.setState({
            searchInput: '',
        });
    }

    handleDelete = () => {
        if (this.state.tableData.length === 0) return;

        const updatedTable = [...this.state.tableData];
        updatedTable.pop();

        this.setState({
            tableData: updatedTable,
        });
    }


    render() {
        const { tableData,
                searchInput 
        } = this.state;

        return (
            <>
                <CreateProduct addProductToTable={this.addProductToTable} />
                <ProductTable tableData={tableData} />
                <div className='input-group mt-3'>
                        <div className='row m-3'>
                            <div className='form-outline mb-2' style={{width: "60%"}}>
                                <input 
                                    type="search" 
                                    name="search" 
                                    id="search" 
                                    className='form-control' 
                                    placeholder='Search by Product Name'
                                    value={searchInput}
                                    onChange={(e) => this.setState({searchInput:e.target.value})} 
                                />
                            </div>
                            <div className='row mt-2'>
                                <div className='col-2'>
                                    <button 
                                        type='button' 
                                        className='btn btn-primary' 
                                        id='delete-btn'
                                        onClick={this.handleDelete}
                                        >Deletion</button>
                                </div>
                                <div className='col-4 ms-4'>
                                    <button 
                                        type='button' 
                                        className='btn btn-outline-primary' 
                                        id='search-btn'
                                        onClick={this.handleSearch}
                                        >Search</button>
                                </div>
                            </div>
                        </div>
                    </div>
            </>
        )
    }
}

export default ListProduct;
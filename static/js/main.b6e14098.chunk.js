(this.webpackJsonpreact_crud=this.webpackJsonpreact_crud||[]).push([[0],{12:function(e,t,a){},13:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a.n(n),r=a(3),l=a.n(r),s=(a(12),a(4)),i=a(5),o=a(7),d=a(6),j=(a(13),a(0)),u=function(e){Object(o.a)(a,e);var t=Object(d.a)(a);function a(){var e;return Object(s.a)(this,a),(e=t.call(this)).handleSubmit=function(t){t.preventDefault();var a=e.state.employeeData,n=e.refs.name.value,c=e.refs.age.value;if(0===e.state.act){var r={name:n,age:c};a.push(r)}else{var l=e.state.index;a[l].name=n,a[l].age=c}console.log(a),e.setState({employeeData:a,act:0}),e.refs.form.reset()},e.handleEdit=function(t){var a=e.state.employeeData[t];e.refs.name.value=a.name,e.refs.age.value=a.age,a=e.state.employeeData,console.log(a),e.setState({employeeData:a,act:1,index:t})},e.handleDelete=function(t){var a=e.state.employeeData;a.splice(t,1),e.setState({employeeData:a})},e.state={employeeData:[],act:0,index:""},e}return Object(i.a)(a,[{key:"render",value:function(){var e=this,t=this.state.employeeData;return Object(j.jsxs)("div",{className:"container",children:[Object(j.jsx)("h2",{children:"Crud Application"}),Object(j.jsxs)("form",{ref:"form",className:"myform",children:[Object(j.jsx)("label",{children:"Name"}),Object(j.jsx)("input",{type:"text",ref:"name",className:"form-field",placeholder:"Your name...",required:!0}),Object(j.jsx)("label",{children:"Age"}),Object(j.jsx)("input",{type:"text",ref:"age",className:"form-field",placeholder:"Your age...",required:!0}),Object(j.jsx)("button",{onClick:function(t){return e.handleSubmit(t)},className:"subButton",children:"Save"})]}),Object(j.jsxs)("table",{className:"table",children:[Object(j.jsx)("thead",{children:Object(j.jsxs)("tr",{children:[Object(j.jsx)("th",{scope:"col",children:"Name"}),Object(j.jsx)("th",{scope:"col",children:"Age"})]})}),Object(j.jsx)("tbody",{children:t.map((function(t,a){return Object(j.jsxs)("tr",{children:[Object(j.jsx)("td",{children:t.name}),Object(j.jsx)("td",{children:t.age}),Object(j.jsx)("td",{children:Object(j.jsx)("button",{className:"btn btn-warning",onClick:function(){return e.handleEdit(a)},children:"Edit"})}),Object(j.jsx)("td",{children:Object(j.jsx)("button",{className:"btn btn-danger",onClick:function(){return e.handleDelete(a)},children:"Delete"})})]},a)}))})]})]})}}]),a}(a(1).Component),b=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,16)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,r=t.getLCP,l=t.getTTFB;a(e),n(e),c(e),r(e),l(e)}))};l.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(u,{})}),document.getElementById("root")),b()}},[[15,1,2]]]);
//# sourceMappingURL=main.b6e14098.chunk.js.map
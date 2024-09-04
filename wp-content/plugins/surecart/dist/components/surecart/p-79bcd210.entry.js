import{r as i,c as s,h as t,a as e,H as r,F as o}from"./p-cc7ce8c7.js";import{c as n,h as a}from"./p-e64f9fcd.js";import{r as l,F as d}from"./p-8617d8eb.js";import{s as c}from"./p-c27fae79.js";import{s as u,o as h}from"./p-24f06282.js";import{o as p}from"./p-2f9b1dd9.js";import{a as v,f as m}from"./p-a27e9b70.js";import{l as _,b as g}from"./p-ac8d2e48.js";import{c as b}from"./p-5ec5df35.js";import{s as f}from"./p-830ab1a3.js";import{a as y}from"./p-3a6d77cf.js";import{i as w,g as x}from"./p-50da3ba3.js";import{g as k,s as C}from"./p-296b7340.js";import{f as S,s as A,a as j}from"./p-b3738db2.js";import{c as z}from"./p-8266bbed.js";import{u as q}from"./p-f9c1f513.js";import{i as L}from"./p-d556eec7.js";import"./p-25433d0f.js";import"./p-f70181c4.js";import"./p-4d73f82a.js";import"./p-1c2e2695.js";import"./p-a3a138d6.js";import"./p-7ef0f71c.js";import"./p-18e45a13.js";const R=":host{display:block}.sc-address{display:block;position:relative}.sc-address [hidden]{display:none}.sc-address--loading{min-height:70px}.sc-address--loading sc-skeleton{display:block;margin-bottom:1em}.sc-address__control{display:block}.sc-address__control>*{margin-bottom:-1px}.sc-address__columns{display:flex;flex-direction:row;align-items:center;flex-wrap:wrap;justify-content:space-between}.sc-address__columns>*{flex:1;width:50%;margin-left:-1px}.sc-address__columns>*:first-child{margin-left:0}";const O=class{constructor(t){i(this,t);this.scChangeAddress=s(this,"scChangeAddress",7);this.scInputAddress=s(this,"scInputAddress",7);this.address={country:null,city:null,line_1:null,line_2:null,postal_code:null,state:null};this.names={country:"shipping_country",city:"shipping_city",line_1:"shipping_line_1",line_2:"shipping_line_2",postal_code:"shipping_postal_code",state:"shipping_state"};this.placeholders={country:"",postal_code:"",state:""};this.label=wp.i18n.__("Country or region","surecart");this.required=undefined;this.loading=undefined;this.countryChoices=n;this.regions=undefined;this.showState=undefined;this.showPostal=undefined}handleAddressChange(){if(!this.address.country)return;this.setRegions();this.showState=["US","CA"].includes(this.address.country);this.showPostal=["US"].includes(this.address.country);this.scChangeAddress.emit(this.address);this.scInputAddress.emit(this.address)}updateAddress(i){this.address={...this.address,...i}}handleAddressInput(i){this.scInputAddress.emit({...this.address,...i})}clearAddress(){var i;this.address={name:(i=this.address)===null||i===void 0?void 0:i.name,country:null,line_1:null,line_2:null,city:null,postal_code:null,state:null}}setRegions(){if(a(this.address.country)){import("./p-59916e56.js").then((i=>{this.regions=i===null||i===void 0?void 0:i[this.address.country]}))}else{this.regions=[]}}componentWillLoad(){var i;this.handleAddressChange();const s=(i=this.countryChoices.find((i=>i.value===this.address.country)))===null||i===void 0?void 0:i.value;if(s){this.updateAddress({country:s})}}async reportValidity(){return l(this.el)}getStatePlaceholder(){var i,s;if((i=this.placeholders)===null||i===void 0?void 0:i.state)return this.placeholders.state;if(((s=this.address)===null||s===void 0?void 0:s.country)==="US")return wp.i18n.__("State","surecart");return wp.i18n.__("Province/Region","surecart")}render(){var i,s,e,r,o;return t("div",{class:"sc-address",part:"base"},t("sc-form-control",{exportparts:"label, help-text, form-control",label:this.label,class:"sc-address__control",part:"control",required:this.required},t("sc-select",{exportparts:"base:select__base, input, form-control, label, help-text, trigger, panel, caret, search__base, search__input, search__form-control, menu__base, spinner__base, empty",value:(i=this.address)===null||i===void 0?void 0:i.country,onScChange:i=>{this.clearAddress();this.updateAddress({country:i.target.value||null})},choices:this.countryChoices,autocomplete:"country-name",placeholder:((s=this.placeholders)===null||s===void 0?void 0:s.country)||wp.i18n.__("Select Your Country","surecart"),name:this.names.country,search:true,unselect:false,"squared-bottom":this.showState||this.showPostal,required:this.required}),t("div",{class:"sc-address__columns"},this.showState&&t("sc-select",{exportparts:"base:select__base, input, form-control, label, help-text, trigger, panel, caret, search__base, search__input, search__form-control, menu__base, spinner__base, empty",placeholder:this.getStatePlaceholder(),name:this.names.state,autocomplete:"address-level1",value:(e=this===null||this===void 0?void 0:this.address)===null||e===void 0?void 0:e.state,onScChange:i=>this.updateAddress({state:i.target.value||null}),choices:this.regions,required:this.required,search:true,"squared-top":true,unselect:false,"squared-right":this.showPostal}),this.showPostal&&t("sc-input",{exportparts:"base:input__base, input, form-control, label, help-text",placeholder:((r=this.placeholders)===null||r===void 0?void 0:r.postal_code)||wp.i18n.__("Postal Code/Zip","surecart"),name:this.names.postal_code,onScChange:i=>this.updateAddress({postal_code:i.target.value||null}),onScInput:i=>this.handleAddressInput({name:i.target.value||null}),autocomplete:"postal-code",required:this.required,value:(o=this===null||this===void 0?void 0:this.address)===null||o===void 0?void 0:o.postal_code,"squared-top":true,maxlength:5,"squared-left":this.showState}))),this.loading&&t("sc-block-ui",{exportparts:"base:block-ui, content:block-ui__content"}))}get el(){return e(this)}static get watchers(){return{address:["handleAddressChange"]}}};O.style=R;const P=":host{display:block}";const I=class{constructor(s){i(this,s);this.label=undefined}render(){const{checkout:i}=u;if(!(i===null||i===void 0?void 0:i.selected_shipping_choice)){return t(r,{style:{display:"none"}})}if(c.formState.value==="loading"){return t("sc-line-item",null,t("sc-skeleton",{slot:"title",style:{width:"120px",display:"inline-block"}}),t("sc-skeleton",{slot:"price",style:{width:"70px",display:"inline-block","--border-radius":"6px"}}))}return t("sc-line-item",null,t("span",{slot:"description"},this.label||wp.i18n.__("Shipping","surecart")),t("span",{slot:"price"},(i===null||i===void 0?void 0:i.shipping_amount)?t("sc-format-number",{type:"currency",currency:i===null||i===void 0?void 0:i.currency,value:i===null||i===void 0?void 0:i.shipping_amount}):wp.i18n.__("Free","surecart")))}};I.style=P;const F=":host{display:block}";const N=class{constructor(s){i(this,s);this.order=undefined;this.loading=undefined}renderLabel(){var i,s,e;let r=wp.i18n.sprintf(wp.i18n.__("Estimated %s","surecart"),((i=this===null||this===void 0?void 0:this.order)===null||i===void 0?void 0:i.tax_label)||"");if(((s=this===null||this===void 0?void 0:this.order)===null||s===void 0?void 0:s.tax_status)==="calculated"){r=((e=this.order)===null||e===void 0?void 0:e.tax_label)||""}return t(o,null,`${wp.i18n.__("Tax:","surecart")} ${r}`,this.renderPercent())}renderPercent(){var i;if((i=this.order)===null||i===void 0?void 0:i.tax_percent){return t(o,null,"(",this.order.tax_percent,"%",")")}return""}render(){var i,s,e,r,o,n,a;if(!((i=this===null||this===void 0?void 0:this.order)===null||i===void 0?void 0:i.tax_amount)){return null}return t("sc-line-item",null,t("span",{slot:"description"},this.renderLabel()),((s=this.order)===null||s===void 0?void 0:s.tax_exclusive_amount)&&t("span",{slot:"price"},t("sc-format-number",{type:"currency",currency:((e=this===null||this===void 0?void 0:this.order)===null||e===void 0?void 0:e.currency)||"usd",value:(r=this===null||this===void 0?void 0:this.order)===null||r===void 0?void 0:r.tax_exclusive_amount})),((o=this.order)===null||o===void 0?void 0:o.tax_inclusive_amount)&&t("span",{slot:"price-description"},"(",t("sc-format-number",{type:"currency",currency:((n=this===null||this===void 0?void 0:this.order)===null||n===void 0?void 0:n.currency)||"usd",value:(a=this===null||this===void 0?void 0:this.order)===null||a===void 0?void 0:a.tax_inclusive_amount})," ",wp.i18n.__("included","surecart"),")"))}};p(N,["order","loading"],false);N.style=F;const T=":host{display:block}.order-billing-address__toggle{margin-bottom:var(--sc-form-row-spacing, var(--sc-spacing-medium))}";const D=class{constructor(s){i(this,s);this.label=undefined;this.showName=undefined;this.namePlaceholder=wp.i18n.__("Name or Company Name","surecart");this.countryPlaceholder=wp.i18n.__("Country","surecart");this.cityPlaceholder=wp.i18n.__("City","surecart");this.line1Placeholder=wp.i18n.__("Address","surecart");this.line2Placeholder=wp.i18n.__("Address Line 2","surecart");this.postalCodePlaceholder=wp.i18n.__("Postal Code/Zip","surecart");this.statePlaceholder=wp.i18n.__("State/Province/Region","surecart");this.defaultCountry=undefined;this.toggleLabel=wp.i18n.__("Billing address is same as shipping","surecart");this.address={country:null,city:null,line_1:null,line_2:null,postal_code:null,state:null}}async reportValidity(){var i,s;if(!this.input)return true;return(s=(i=this.input)===null||i===void 0?void 0:i.reportValidity)===null||s===void 0?void 0:s.call(i)}prefillAddress(){var i;const s=Object.keys(this.address).filter((i=>i!=="country"));const t=s.filter((i=>!this.address[i]));if(t.length===s.length){this.address={...this.address,...(i=u.checkout)===null||i===void 0?void 0:i.billing_address}}}componentWillLoad(){if(this.defaultCountry&&!this.address.country){this.address.country=this.defaultCountry}this.prefillAddress();h("checkout",(()=>this.prefillAddress()))}async updateAddressState(i){var s,t;if(JSON.stringify(i)===JSON.stringify(this.address))return;this.address=i;try{_("billing-address");u.checkout=await b({id:(s=u===null||u===void 0?void 0:u.checkout)===null||s===void 0?void 0:s.id,data:{billing_matches_shipping:(t=u.checkout)===null||t===void 0?void 0:t.billing_matches_shipping,billing_address:this.address}})}catch(i){console.error(i)}finally{g("billing-address")}}async onToggleBillingMatchesShipping(i){u.checkout={...u.checkout,billing_matches_shipping:i.target.checked}}shippingAddressFieldExists(){return!!document.querySelector("sc-order-shipping-address")}render(){var i,s;return t(o,null,this.shippingAddressFieldExists()&&t("sc-checkbox",{class:"order-billing-address__toggle",onScChange:i=>this.onToggleBillingMatchesShipping(i),checked:(i=u.checkout)===null||i===void 0?void 0:i.billing_matches_shipping},this.toggleLabel),(!this.shippingAddressFieldExists()||!((s=u.checkout)===null||s===void 0?void 0:s.billing_matches_shipping))&&t("sc-address",{exportparts:"label, help-text, form-control, input__base, select__base, columns, search__base, menu__base",ref:i=>{this.input=i},label:this.label||wp.i18n.__("Billing Address","surecart"),placeholders:{name:this.namePlaceholder,country:this.countryPlaceholder,city:this.cityPlaceholder,line_1:this.line1Placeholder,line_2:this.line2Placeholder,postal_code:this.postalCodePlaceholder,state:this.statePlaceholder},names:{name:"billing_name",country:"billing_country",city:"billing_city",line_1:"billing_line_1",line_2:"billing_line_2",postal_code:"billing_postal_code",state:"billing_state"},required:true,loading:v(),address:this.address,"show-name":this.showName,onScChangeAddress:i=>this.updateAddressState(i.detail)}))}};D.style=T;const V=":host {\n  display: block;\n}\n\n.bump {\n  display: grid;\n  gap: 1em;\n}\n.bump__text {\n  display: grid;\n  gap: 0.25em;\n}\n.bump__tag {\n  background: var(--sc-color-primary-500);\n  color: var(--sc-color-white);\n  border-radius: var(--sc-input-border-radius-medium);\n  padding: var(--sc-spacing-x-small);\n  font-size: var(--sc-font-size-x-small);\n}\n.bump__product {\n  display: flex;\n  align-items: center;\n  gap: var(--sc-choice-padding, 1.3em 1.1em);\n  line-height: var(--sc-line-height-dense);\n}\n.bump__product--wrapper {\n  container-type: inline-size;\n}\n@container (max-width: 325px) {\n  .bump__product {\n    flex-direction: column;\n    align-items: start;\n  }\n}\n.bump__product-title {\n  font-weight: var(--sc-font-weight-semibold);\n}\n.bump__product-description {\n  color: var(--sc-input-label-color);\n}\n.bump__image {\n  width: var(--sc-product-line-item-image-size, 4em);\n  height: var(--sc-product-line-item-image-size, 4em);\n  flex: 0 0 var(--sc-product-line-item-image-size, 4em);\n  object-fit: cover;\n  border-radius: 4px;\n  border: 1px solid var(--sc-color-gray-200);\n  display: block;\n  box-shadow: var(--sc-input-box-shadow);\n}\n.bump__price--has-discount .bump__original-price {\n  text-decoration: line-through;\n  color: var(--sc-color-gray-500);\n  font-size: var(--sc-font-size-small);\n}\n.bump__price .bump__new-price {\n  font-size: var(--sc-font-size-large);\n  color: var(--sc-color-gray-700);\n}\n.bump__price .bump__interval {\n  color: var(--sc-color-gray-500);\n}\n.bump__amount {\n  display: flex;\n  align-items: center;\n  gap: var(--sc-spacing-x-small);\n  flex-wrap: wrap;\n  margin-top: var(--sc-spacing-xx-small);\n}";const E=class{constructor(t){i(this,t);this.scAddLineItem=s(this,"scAddLineItem",7);this.scRemoveLineItem=s(this,"scRemoveLineItem",7);var e;this.bump=undefined;this.showControl=undefined;this.cdnRoot=(e=window.scData)===null||e===void 0?void 0:e.cdn_root}updateLineItem(i){var s,t,e;const r=((s=this.bump.price)===null||s===void 0?void 0:s.id)||((t=this.bump)===null||t===void 0?void 0:t.price);if(i){this.scAddLineItem.emit({bump:(e=this.bump)===null||e===void 0?void 0:e.id,price_id:r,quantity:1});f(wp.i18n.__("Order bump applied.","surecart"))}else{this.scRemoveLineItem.emit({price_id:r,quantity:1});f(wp.i18n.__("Order bump Removed.","surecart"))}}newPrice(){var i,s,t,e,r,o;let n=null;let a=((s=(i=this.bump)===null||i===void 0?void 0:i.price)===null||s===void 0?void 0:s.amount)||0;if((t=this.bump)===null||t===void 0?void 0:t.amount_off){n=Math.max(0,a-((e=this.bump)===null||e===void 0?void 0:e.amount_off))}if((r=this.bump)===null||r===void 0?void 0:r.percent_off){const i=a*(((o=this.bump)===null||o===void 0?void 0:o.percent_off)/100);n=Math.max(0,a-i)}return n}renderInterval(){var i;const s=w((i=this.bump)===null||i===void 0?void 0:i.price,{labels:{interval:"/",period:wp.i18n.__("for","surecart")}});if(!s.trim().length)return null;return t("span",{class:"bump__interval"},s)}renderPrice(){var i,s,e,r,o,n,a,l,d,c,u;return t("div",{slot:"description",class:{bump__price:true,"bump__price--has-discount":!!((i=this.bump)===null||i===void 0?void 0:i.percent_off)||!!((s=this.bump)===null||s===void 0?void 0:s.amount_off)},part:"price"},t("span",{"aria-label":wp.i18n.sprintf(wp.i18n.__("Originally priced at %s.","surecart"),x({amount:(r=(e=this.bump)===null||e===void 0?void 0:e.price)===null||r===void 0?void 0:r.amount,currency:(n=(o=this.bump)===null||o===void 0?void 0:o.price)===null||n===void 0?void 0:n.currency}))},t("sc-format-number",{type:"currency",class:"bump__original-price",value:(l=(a=this.bump)===null||a===void 0?void 0:a.price)===null||l===void 0?void 0:l.amount,currency:(c=(d=this.bump)===null||d===void 0?void 0:d.price)===null||c===void 0?void 0:c.currency})," "),t("span",null,t("span",{"aria-hidden":"true"},this.newPrice()===0&&wp.i18n.__("Free","surecart"),this.newPrice()!==null&&this.newPrice()>0&&t("sc-format-number",{type:"currency",class:"bump__new-price",value:this.newPrice(),currency:((u=this.bump)===null||u===void 0?void 0:u.price).currency}),this.renderInterval())))}renderDiscount(){var i,s,e,r,o,n,a,l;if(!!((i=this.bump)===null||i===void 0?void 0:i.amount_off)){return t("div",{class:"bump__tag","aria-label":wp.i18n.sprintf(wp.i18n.__("You save %1$s%2$s.","surecart"),(s=this.bump)===null||s===void 0?void 0:s.amount_off,((e=this.bump)===null||e===void 0?void 0:e.price).currency)},t("span",{"aria-hidden":"true"},wp.i18n.__("Save","surecart")," ",t("sc-format-number",{type:"currency",value:-((r=this.bump)===null||r===void 0?void 0:r.amount_off),currency:((o=this.bump)===null||o===void 0?void 0:o.price).currency})))}if(!!((n=this.bump)===null||n===void 0?void 0:n.percent_off)){return t("div",{class:"bump__tag","aria-label":wp.i18n.sprintf(wp.i18n.__("You save %s%%.","surecart"),(a=this.bump)===null||a===void 0?void 0:a.percent_off)},t("span",{"aria-hidden":"true"},wp.i18n.sprintf(wp.i18n.__("Save %s%%","surecart"),(l=this.bump)===null||l===void 0?void 0:l.percent_off)))}}render(){var i,s,e,r,o,n,a,l,d,c,h,p,v,m,_,g,b,f,w;const x=(s=(i=this.bump)===null||i===void 0?void 0:i.price)===null||s===void 0?void 0:s.product;const S=k(x);return t("sc-choice",{value:(e=this.bump)===null||e===void 0?void 0:e.id,type:"checkbox",showControl:this.showControl,checked:y(this.bump,u===null||u===void 0?void 0:u.checkout),onScChange:i=>this.updateLineItem(i.target.checked),onKeyDown:i=>{if(i.key==="Enter"||i.key===" "){i.preventDefault();i.stopImmediatePropagation();this.updateLineItem(!y(this.bump,u===null||u===void 0?void 0:u.checkout))}},exportparts:"base, control, checked-icon, title"},t("div",{part:"base-content",class:"bump"},t("div",{class:"bump__text"},t("div",{class:"bump__title","aria-label":wp.i18n.sprintf(wp.i18n.__("Product: %s.","surecart"),((o=(r=this.bump)===null||r===void 0?void 0:r.metadata)===null||o===void 0?void 0:o.cta)||((n=this.bump)===null||n===void 0?void 0:n.name)||(x===null||x===void 0?void 0:x.name))},t("span",{"aria-hidden":"true"},((l=(a=this.bump)===null||a===void 0?void 0:a.metadata)===null||l===void 0?void 0:l.cta)||((d=this.bump)===null||d===void 0?void 0:d.name)||(x===null||x===void 0?void 0:x.name))),t("div",{class:"bump__amount"},t("span",null,this.renderPrice()),t("span",null,this.renderDiscount())))),((h=(c=this.bump)===null||c===void 0?void 0:c.metadata)===null||h===void 0?void 0:h.description)&&t("div",{slot:"footer",class:"bump__product--wrapper"},t("sc-divider",{style:{"--spacing":"var(--sc-spacing-medium)"}}),t("div",{class:"bump__product"},!!(S===null||S===void 0?void 0:S.url)&&t("img",{src:C(S===null||S===void 0?void 0:S.url,130),alt:S.alt,...S.title?{title:S.title}:{},class:"bump__image"}),t("div",{class:"bump__product-text"},!!((v=(p=this.bump)===null||p===void 0?void 0:p.metadata)===null||v===void 0?void 0:v.cta)&&t("div",{class:"bump__product-title","aria-hidden":"true"},this.bump.name||(x===null||x===void 0?void 0:x.name)),!!((_=(m=this.bump)===null||m===void 0?void 0:m.metadata)===null||_===void 0?void 0:_.description)&&t("div",{class:"bump__product-description","aria-label":wp.i18n.sprintf(wp.i18n.__("Product description: %s.","surecart"),(b=(g=this.bump)===null||g===void 0?void 0:g.metadata)===null||b===void 0?void 0:b.description)},t("span",{"aria-hidden":"true"},(w=(f=this.bump)===null||f===void 0?void 0:f.metadata)===null||w===void 0?void 0:w.description))))))}};E.style=V;const B=":host{display:block}.bumps__list{display:grid;gap:10px}";const $=class{constructor(s){i(this,s);this.label=undefined;this.showControl=undefined;this.help=undefined}render(){var i,s;const e=(((s=(i=u===null||u===void 0?void 0:u.checkout)===null||i===void 0?void 0:i.recommended_bumps)===null||s===void 0?void 0:s.data)||[]).filter((i=>{var s,t,e,r;return((r=(e=(t=(s=i===null||i===void 0?void 0:i.price)===null||s===void 0?void 0:s.product)===null||t===void 0?void 0:t.variants)===null||e===void 0?void 0:e.pagination)===null||r===void 0?void 0:r.count)===0}));if(!(e===null||e===void 0?void 0:e.length)){return null}return t("sc-form-control",{label:this.label||wp.i18n.__("Recommended","surecart"),help:this.help},t("div",{class:"bumps__list","aria-label":wp.i18n.__("Order bump summary","surecart")},e.map((i=>t("sc-order-bump",{key:i===null||i===void 0?void 0:i.id,showControl:this.showControl,bump:i})))))}};$.style=B;const J=":host{display:block}.sc-order-shipping__loading{display:flex;flex-direction:column;gap:0.5em}";const M=class{constructor(s){i(this,s);this.names={name:"shipping_name",country:"shipping_country",city:"shipping_city",line_1:"shipping_line_1",line_2:"shipping_line_2",postal_code:"shipping_postal_code",state:"shipping_state"};this.label=undefined;this.required=false;this.full=undefined;this.showName=undefined;this.namePlaceholder=wp.i18n.__("Name or Company Name","surecart");this.countryPlaceholder=wp.i18n.__("Country","surecart");this.cityPlaceholder=wp.i18n.__("City","surecart");this.line1Placeholder=wp.i18n.__("Address","surecart");this.line2Placeholder=wp.i18n.__("Address Line 2","surecart");this.postalCodePlaceholder=wp.i18n.__("Postal Code/Zip","surecart");this.statePlaceholder=wp.i18n.__("State/Province/Region","surecart");this.defaultCountry=undefined;this.requireName=false;this.placeholders={name:wp.i18n.__("Name or Company Name","surecart"),country:wp.i18n.__("Country","surecart"),city:wp.i18n.__("City","surecart"),line_1:wp.i18n.__("Address","surecart"),line_2:wp.i18n.__("Address Line 2","surecart"),postal_code:wp.i18n.__("Postal Code/Zip","surecart"),state:wp.i18n.__("State/Province/Region","surecart")};this.address={country:null,city:null,line_1:null,line_2:null,postal_code:null,state:null}}async updateAddressState(i){var s;if(JSON.stringify(i)===JSON.stringify(this.address))return;this.address=i;try{_("shipping-address");u.checkout=await b({id:(s=u.checkout)===null||s===void 0?void 0:s.id,data:{shipping_address:this.address}})}catch(i){console.error(i)}finally{g("shipping-address")}}async reportValidity(){var i,s;return(s=(i=this.input)===null||i===void 0?void 0:i.reportValidity)===null||s===void 0?void 0:s.call(i)}prefillAddress(){var i;const s=Object.keys(this.address).filter((i=>i!=="country"));const t=s.filter((i=>!this.address[i]));if(t.length===s.length){this.address={...this.address,...(i=u.checkout)===null||i===void 0?void 0:i.shipping_address}}}componentWillLoad(){if(this.defaultCountry&&!this.address.country){this.address.country=this.defaultCountry}this.prefillAddress();h("checkout",(()=>this.prefillAddress()))}render(){if(S()||this.full||this.requireName||this.showName){return t("sc-address",{exportparts:"label, help-text, form-control, input__base, select__base, columns, search__base, menu__base",ref:i=>this.input=i,label:this.label||wp.i18n.__("Shipping Address","surecart"),placeholders:{name:this.namePlaceholder,country:this.countryPlaceholder,city:this.cityPlaceholder,line_1:this.line1Placeholder,line_2:this.line2Placeholder,postal_code:this.postalCodePlaceholder,state:this.statePlaceholder},names:this.names,required:this.required||A(),loading:v(),address:this.address,"show-name":this.showName,"require-name":this.requireName,onScChangeAddress:i=>this.updateAddressState(i.detail)})}return t("sc-compact-address",{ref:i=>this.input=i,required:this.required||A(),loading:v(),address:this.address,placeholders:{name:this.namePlaceholder,country:this.countryPlaceholder,city:this.cityPlaceholder,line_1:this.line1Placeholder,line_2:this.line2Placeholder,postal_code:this.postalCodePlaceholder,state:this.statePlaceholder},names:this.names,label:this.label,onScChangeAddress:i=>this.updateAddressState(i.detail)})}};M.style=J;const U=":host{display:block}";const W=class{constructor(s){i(this,s);this.show=false;this.otherLabel=undefined;this.caGstLabel=undefined;this.auAbnLabel=undefined;this.gbVatLabel=undefined;this.euVatLabel=undefined;this.helpText=undefined;this.taxIdTypes=undefined;this.taxIdTypesData=[]}handleTaxIdTypesChange(){this.taxIdTypesData=typeof this.taxIdTypes==="string"?JSON.parse(this.taxIdTypes):this.taxIdTypes}async reportValidity(){return this.input.reportValidity()}getStatus(){var i,s,t,e,r;if(((s=(i=u.checkout)===null||i===void 0?void 0:i.tax_identifier)===null||s===void 0?void 0:s.number_type)!=="eu_vat"){return"unknown"}if(((t=u.taxProtocol)===null||t===void 0?void 0:t.eu_vat_unverified_behavior)==="apply_reverse_charge"){return"unknown"}return((r=(e=u.checkout)===null||e===void 0?void 0:e.tax_identifier)===null||r===void 0?void 0:r.eu_vat_verified)?"valid":"invalid"}async updateOrder(i){try{q("FETCH");u.checkout=await b({id:u.checkout.id,data:{tax_identifier:i}});q("RESOLVE")}catch(i){console.error(i);z(i);q("REJECT")}}componentWillLoad(){this.handleTaxIdTypesChange()}required(){var i,s,t;return((i=u.taxProtocol)===null||i===void 0?void 0:i.eu_vat_required)&&((t=(s=u.checkout)===null||s===void 0?void 0:s.tax_identifier)===null||t===void 0?void 0:t.number_type)==="eu_vat"}render(){var i,s,e,r,o,n,a;return t("sc-tax-id-input",{ref:i=>this.input=i,show:this.show,number:(s=(i=u.checkout)===null||i===void 0?void 0:i.tax_identifier)===null||s===void 0?void 0:s.number,type:((r=(e=u.checkout)===null||e===void 0?void 0:e.tax_identifier)===null||r===void 0?void 0:r.number_type)||((o=this.taxIdTypesData)===null||o===void 0?void 0:o[0])||"eu_vat",country:(a=(n=u.checkout)===null||n===void 0?void 0:n.shipping_address)===null||a===void 0?void 0:a.country,status:this.getStatus(),loading:m(),onScChange:i=>{i.stopImmediatePropagation();this.updateOrder(i.detail)},otherLabel:this.otherLabel,caGstLabel:this.caGstLabel,auAbnLabel:this.auAbnLabel,gbVatLabel:this.gbVatLabel,euVatLabel:this.euVatLabel,help:this.helpText,taxIdTypes:this.taxIdTypesData,required:this.required()})}static get watchers(){return{taxIdTypes:["handleTaxIdTypesChange"]}}};W.style=U;const Y=":host{display:inline-block}::slotted([slot=description]){display:block;color:var(--sc-radio-description-color, var(--sc-input-help-text-color, var(--sc-color-gray-500)));line-height:var(--sc-line-height-dense);margin:0.5em 0 0;font-size:var(--sc-font-size-small)}.radio{display:inline-flex;align-items:flex-start;font-family:var(--sc-input-font-family);font-size:var(--sc-input-font-size-medium);font-weight:var(--sc-input-font-weight);color:var(--sc-input-color);vertical-align:middle;gap:var(--sc-spacing-xx-small)}.radio:not(.radio--editing){cursor:pointer}.radio__icon{display:inline-flex;width:var(--sc-radio-size);height:var(--sc-radio-size)}.radio__icon svg{width:100%;height:100%}.radio__control{flex:0 0 auto;position:relative;display:inline-flex;align-items:center;justify-content:center;width:var(--sc-radio-size);height:var(--sc-radio-size);border:solid var(--sc-input-border-width) var(--sc-input-border-color);border-radius:50%;background-color:var(--sc-input-background-color);color:transparent;transition:var(--sc-input-transition, var(--sc-transition-medium)) border-color, var(--sc-input-transition, var(--sc-transition-medium)) opacity, var(--sc-input-transition, var(--sc-transition-medium)) background-color, var(--sc-input-transition, var(--sc-transition-medium)) color, var(--sc-input-transition, var(--sc-transition-medium)) box-shadow}.radio__control input[type=radio]{position:absolute;opacity:0;padding:0;margin:0;pointer-events:none}.radio:not(.radio--checked):not(.radio--disabled) .radio__control:hover{border-color:var(--sc-input-border-color-hover);background-color:var(--sc-input-background-color-hover)}.radio.radio--focused:not(.radio--checked):not(.radio--disabled) .radio__control{border-color:var(--sc-input-border-color-focus);background-color:var(--sc-input-background-color-focus);box-shadow:0 0 0 var(--sc-focus-ring-width) var(--sc-focus-ring-color-primary)}.radio--checked .radio__control{color:var(--var-sc-checked-radio-background-color, var(--sc-input-background-color));border-color:var(--sc-color-primary-500);background-color:var(--sc-color-primary-500)}.radio.radio--checked:not(.radio--disabled) .radio__control:hover{opacity:0.8}.radio.radio--checked:not(.radio--disabled).radio--focused .radio__control{border-color:var(--var-sc-checked-radio-border-color, var(--sc-input-background-color));background-color:var(--sc-color-primary-500);box-shadow:0 0 0 var(--sc-focus-ring-width) var(--sc-focus-ring-color-primary)}.radio--disabled{opacity:0.5;cursor:not-allowed}.radio:not(.radio--checked) svg circle{opacity:0}.radio__label{line-height:var(--sc-radio-size);margin-left:0.5em;user-select:none}";let Z=0;const K=class{constructor(t){i(this,t);this.scBlur=s(this,"scBlur",7);this.scChange=s(this,"scChange",7);this.scFocus=s(this,"scFocus",7);this.inputId=`radio-${++Z}`;this.labelId=`radio-label-${Z}`;this.hasFocus=false;this.name=undefined;this.value=undefined;this.disabled=false;this.checked=false;this.required=false;this.invalid=false;this.edit=undefined}async ceClick(){this.input.click()}async reportValidity(){this.invalid=!this.input.checkValidity();return this.input.reportValidity()}handleCheckedChange(){if(!this.input)return;if(this.checked){this.getSiblingRadios().map((i=>i.checked=false))}this.input.checked=this.checked;this.scChange.emit()}handleClick(){this.checked=true}handleBlur(){this.hasFocus=false;this.scBlur.emit()}handleFocus(){this.hasFocus=true;this.scFocus.emit()}setCustomValidity(i){this.input.setCustomValidity(i);this.invalid=!this.input.checkValidity()}getAllRadios(){const i=this.el.closest("sc-radio-group");if(!i){return[]}return[...i.querySelectorAll("sc-radio")]}getSiblingRadios(){return this.getAllRadios().filter((i=>i!==this.el))}handleKeyDown(i){if(this.edit)return true;if(["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].includes(i.key)){const s=this.getAllRadios().filter((i=>!i.disabled));const t=["ArrowUp","ArrowLeft"].includes(i.key)?-1:1;let e=s.indexOf(this.el)+t;if(e<0)e=s.length-1;if(e>s.length-1)e=0;this.getAllRadios().map((i=>i.checked=false));s[e].focus();s[e].checked=true;i.preventDefault()}}handleMouseDown(i){if(this.edit)return true;i.preventDefault();this.input.focus()}componentDidLoad(){this.formController=new d(this.el,{value:i=>i.checked?i.value:undefined}).addFormData()}disconnectedCallback(){var i;(i=this.formController)===null||i===void 0?void 0:i.removeFormData()}render(){const i=this.edit?"div":"label";return t(i,{part:"base",class:{radio:true,"radio--checked":this.checked,"radio--disabled":this.disabled,"radio--focused":this.hasFocus,"radio--editing":this.edit},htmlFor:this.inputId,onKeyDown:i=>this.handleKeyDown(i),onMouseDown:i=>this.handleMouseDown(i)},t("span",{part:"control",class:"radio__control"},t("span",{part:"checked-icon",class:"radio__icon"},t("svg",{viewBox:"0 0 16 16"},t("g",{stroke:"none","stroke-width":"1",fill:"none","fill-rule":"evenodd"},t("g",{fill:"currentColor"},t("circle",{cx:"8",cy:"8",r:"3.42857143"}))))),t("input",{id:this.inputId,ref:i=>this.input=i,type:"radio",name:this.name,value:this.value,checked:this.checked,disabled:this.disabled,required:this.required,"aria-checked":this.checked?"true":"false","aria-disabled":this.disabled?"true":"false","aria-labelledby":this.labelId,onClick:()=>this.handleClick(),onBlur:()=>this.handleBlur(),onFocus:()=>this.handleFocus()})),t("span",{part:"label",id:this.labelId,class:"radio__label"},t("slot",null),t("slot",{name:"description"})))}get el(){return e(this)}static get watchers(){return{checked:["handleCheckedChange"]}}};K.style=Y;const H=':host{display:block}.radio-group{border:none;padding:0;margin:0;min-width:0}.radio-group .radio-group__label{display:inline-block;padding:0;color:var(--sc-input-label-color);font-weight:var(--sc-input-label-font-weight);text-transform:var(--sc-input-label-text-transform, none);letter-spacing:var(--sc-input-label-letter-spacing, 0);margin-bottom:var(--sc-input-label-margin)}.radio-group__hidden-input{position:absolute;opacity:0;padding:0px;margin:0px;pointer-events:none}.radio-group--is-required .radio-group__label:after{content:" *";color:var(--sc-color-danger-500)}::slotted(sc-radio:not(:last-of-type)){display:block;margin-bottom:var(--sc-spacing-x-small)}.radio-group--is-rtl.radio-group,.radio-group--is-rtl.radio-group .radio-group__label{text-align:right}';const G=class{constructor(t){i(this,t);this.scChange=s(this,"scChange",7);this.label="";this.invalid=undefined;this.value="";this.required=undefined}async reportValidity(){this.invalid=!this.input.checkValidity();return this.input.reportValidity()}handleRadioClick(i){if(i.target.tagName!=="SC-RADIO")return;i.stopImmediatePropagation();const s=i.target;if(s.disabled){return}if(s.checked){this.value=s.value;this.scChange.emit(s.value)}}componentDidLoad(){const i=[...this.el.querySelectorAll("sc-radio")];i.forEach((i=>{if(i.checked){this.value=i.value}}))}render(){return t("fieldset",{part:"base",class:{"radio-group":true,"radio-group--invalid":this.invalid,"radio-group--is-required":this.required,"radio-group--is-rtl":L()},"aria-invalid":this.invalid,role:"radiogroup"},t("legend",{part:"label",class:"radio-group__label"},t("slot",{name:"label"},this.label)),t("input",{type:"text",class:"radio-group__hidden-input",ref:i=>this.input=i,required:this.required,value:this.value,tabindex:"-1"}),t("div",{part:"items",class:"radio-group__items"},t("slot",null)))}get el(){return e(this)}};G.style=H;const Q=":host{display:block}.shipping-choice{width:100%;padding:var(--sc-spacing-medium);margin:0;box-sizing:border-box;border-bottom:var(--sc-input-border, 1px solid var(--sc-color-gray-300));background-color:var(--sc-shipping-choice-background-color, var(--sc-input-background-color))}.shipping-choice__empty{background:var(--sc-alert-background-color, var(--sc-color-gray-100));opacity:0.75;padding:var(--sc-spacing-large);border-radius:var(--sc-input-border-radius-medium);line-height:var(--sc-line-height-dense);font-size:var(--sc-font-size-small);border:solid 1px var(--sc-input-border-color, var(--sc-input-border))}.shipping-choice:last-child{border-bottom-width:0}.shipping-choice__text{display:flex;flex-direction:column;gap:var(--sc-spacing-xx-small)}.shipping-choice__price{color:var(--sc-input-label-color);font-weight:var(--sc-price-choice-price-font-weight, var(--sc-font-weight-normal));white-space:nowrap;display:var(--sc-shipping-choice-price-display, inherit)}.shipping-choice__name{display:inline-block;color:var(--sc-price-choice-name-color, var(--sc-input-label-color));font-size:var(--sc-price-choice-name-size, var(--sc-input-label-font-size-medium));font-weight:var(--sc-price-choice-name-font-weight, var(--sc-font-weight-bold));text-transform:var(--sc-price-choice-text-transform, var(--sc-input-label-text-transform, none));line-height:var(--sc-shipping-name-line-height, 1)}.shipping-choice__description{color:var(--sc-input-label-color);font-weight:var(--sc-price-choice-price-font-weight, var(--sc-font-weight-normal));line-height:var(--sc-shipping-description-line-height, 1.2)}sc-radio-group::part(items){border:var(--sc-input-border, 1px solid var(--sc-color-gray-300));border-radius:var(--sc-shipping-choice-border-radius, var(--sc-input-border-radius-medium));box-shadow:var(--sc-shipping-box-shadow, var(--sc-input-box-shadow));overflow:hidden;position:relative}sc-radio::part(base){width:100%}sc-radio::part(label){width:100%;display:flex;justify-content:space-between;gap:var(--sc-spacing-small)}sc-radio-group::slotted(sc-radio:not(:last-of-type)){margin-bottom:0}";const X=class{constructor(s){i(this,s);this.label=undefined;this.showDescription=true}async updateCheckout(i){if(!i)return;try{_("selected_shipping_choice");u.checkout=await b({id:u.checkout.id,data:{selected_shipping_choice_id:i}});f(wp.i18n.__("Shipping choice updated.","surecart"),"assertive");const{total_amount:s,currency:t}=u.checkout;f(wp.i18n.sprintf(wp.i18n.__("Your order total has changed to: %1$s.","surecart"),x({amount:s,currency:t})),"assertive")}catch(i){console.error(i);z(i)}finally{g("selected_shipping_choice")}}render(){var i,s,e,o,n,a,l,d,c,h,p;if(!((i=u===null||u===void 0?void 0:u.checkout)===null||i===void 0?void 0:i.selected_shipping_choice_required)){return t(r,{style:{display:"none"}})}if(!((o=(e=(s=u===null||u===void 0?void 0:u.checkout)===null||s===void 0?void 0:s.shipping_choices)===null||e===void 0?void 0:e.data)===null||o===void 0?void 0:o.length)&&!((a=(n=u===null||u===void 0?void 0:u.checkout)===null||n===void 0?void 0:n.shipping_address)===null||a===void 0?void 0:a.country)){return t("sc-form-control",{label:this.label||wp.i18n.__("Shipping","surecart")},t("div",{class:"shipping-choice__empty"},wp.i18n.__("To check available shipping choices, please provide your shipping country in the address section.","surecart")))}if(!((c=(d=(l=u===null||u===void 0?void 0:u.checkout)===null||l===void 0?void 0:l.shipping_choices)===null||d===void 0?void 0:d.data)===null||c===void 0?void 0:c.length)){return t("sc-form-control",{part:"empty",label:this.label||wp.i18n.__("Shipping","surecart")},t("div",{class:"shipping-choice__empty"},wp.i18n.__("Sorry, we are not able to ship to your address.","surecart")))}return t(r,null,t("sc-radio-group",{part:"base",label:this.label||wp.i18n.__("Shipping","surecart"),class:"shipping-choices",onScChange:i=>this.updateCheckout(i.detail)},(((p=(h=u===null||u===void 0?void 0:u.checkout)===null||h===void 0?void 0:h.shipping_choices)===null||p===void 0?void 0:p.data)||[]).map((({id:i,amount:s,currency:e,shipping_method:r})=>{var o;return t("sc-radio",{key:i,checked:((o=u===null||u===void 0?void 0:u.checkout)===null||o===void 0?void 0:o.selected_shipping_choice)===i,exportparts:"base:radio__base,label:radio__label,control:radio__control,checked-icon:radio__checked-icon",class:"shipping-choice",value:i},t("div",{class:"shipping-choice__text"},t("div",{class:"shipping-choice__name"},(r===null||r===void 0?void 0:r.name)||wp.i18n.__("Standard Shipping","surecart")),this.showDescription&&!!(r===null||r===void 0?void 0:r.description)&&t("div",{class:"shipping-choice__description"},r===null||r===void 0?void 0:r.description)),t("div",{class:"shipping-choice__price"},!!s?t("sc-format-number",{type:"currency",value:s,currency:e}):wp.i18n.__("Free","surecart")))}))),j("selected_shipping_choice")&&t("sc-block-ui",null))}};X.style=Q;export{O as sc_compact_address,I as sc_line_item_shipping,N as sc_line_item_tax,D as sc_order_billing_address,E as sc_order_bump,$ as sc_order_bumps,M as sc_order_shipping_address,W as sc_order_tax_id_input,K as sc_radio,G as sc_radio_group,X as sc_shipping_choices};
//# sourceMappingURL=p-79bcd210.entry.js.map
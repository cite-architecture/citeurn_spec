
var index = lunr(function () {
    this.field('body');
    this.ref('url');
});

var documentTitles = {};



documentTitles["specification.html#the-cite-object-urn-specification-version-01"] = "The CITE Object URN specification, version 0.1";
index.add({
    url: "specification.html#the-cite-object-urn-specification-version-01",
    title: "The CITE Object URN specification, version 0.1",
    body: "# The CITE Object URN specification, version 0.1 #   "
});

documentTitles["specification.html#syntax-of-a-cite-urn"] = "Syntax of a CITE URN";
index.add({
    url: "specification.html#syntax-of-a-cite-urn",
    title: "Syntax of a CITE URN",
    body: "## Syntax of a CITE URN ##  The discussion in this section will be removed when a formal specification for the syntax and semantics of the CITE URN has been released.    "
});

documentTitles["specification.html#overall-structure-of-a-cts-urn"] = "Overall structure of a CTS URN";
index.add({
    url: "specification.html#overall-structure-of-a-cts-urn",
    title: "Overall structure of a CTS URN",
    body: "### Overall structure of a CTS URN ###   All URNs must begin with the string `urn:` followed by a protocol identifier (the \&quot;urn namespace identifier\&quot;), followed by a colon (\&quot;:\&quot;, Unicode x003a). The protocol identifier for the CITE Object URN must be `cite`. The rest of the URN consists of a CITE namespace, and an object component.  The namespace must be separated from the object component by a colon.  A value for the CITE namespace and for the object component is required.  The top-level structure of a CITE URN could be summarized as      urn:cts:CITENAMESPACE:OBJECT  "
});

documentTitles["specification.html#the-object-component"] = "The object component";
index.add({
    url: "specification.html#the-object-component",
    title: "The object component",
    body: "### The object component ###   The work component consists of one to three parts. Each part must be separated from a following part by a full stop (\&quot;.\&quot;, Unicode x002e). A full stop must not be appended to the part value if there is no following part. The value for the first part of the work component is mandatory, and must be a valid value for a collection in the URN's CITE namespace. The second part of the work component is optional; its value must be a valid value for an object within the collection. The third part of the work component is  optional;  its value must be a valid value for a version of the parent object.  The structure of the work component of a CTS URN could be summarized as      COLLECTION.OBJECT.VERSION  "
});

documentTitles["specification.html#extended-references"] = "Extended references";
index.add({
    url: "specification.html#extended-references",
    title: "Extended references",
    body: "### Extended references ###  References to specific objects (either at the notional object level, or the version level) may be qualified by type-specific extended references.   The extended reference must be separated from the canonical reference by the \&quot;at\&quot; sign (\&quot;@\&quot;, Unicode x0040).  If URN includes an extended reference, the value of the extended reference must not be null.  The overall structure of a node reference could be summarized as      OBJECTCOMPONENT@EXTENDEDREFERENCE    "
});



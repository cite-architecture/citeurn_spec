
var index = lunr(function () {
    this.field('body');
    this.ref('url');
});

var documentTitles = {};



documentTitles["specification.html#the-cite-object-urn-specification-version-01"] = "The CITE Object URN specification, version 0.1";
index.add({
    url: "specification.html#the-cite-object-urn-specification-version-01",
    title: "The CITE Object URN specification, version 0.1",
    body: "# The CITE Object URN specification, version 0.1 #   **Content**:  This document defines version 0.1 of the Canonical Text Services URN.  **Editors**:  Christopher Blackwell and Neel Smith, Center for Hellenic Studies Technical Working Group leads.  **Date**:  April, 2015.  **License**:  This specification is available under the terms of the Creative Commons Attribution-ShareAlike 4.0 International License, &lt;http://creativecommons.org/licenses/by-sa/4.0/deed.en_US&gt;.    "
});

documentTitles["specification.html#background"] = "Background";
index.add({
    url: "specification.html#background",
    title: "Background",
    body: "## Background ##   RFC2141 defines the goal of URNs as follows:  &gt; Uniform Resource Names (URNs) are intended to serve as persistent, location-independent, resource identifiers.  The CITE Object URN (or more briefly, \&quot;CITE URN\&quot;) scheme defined here closely follows the syntactic requirements of a URN, but extends its goal to provide a system of persistent, *technology-independent* identifiers for texts and passages of texts.   Specifically, the semantics of the CITE Object URN scheme are recognized by implementations of the CITE Collection Services protocol, but CITE URNs can be used in any system, digital or other, that can parse the syntax of CITE URN values according to the syntax and semantics of this specification.   "
});

documentTitles["specification.html#semantics-of-a-cite-object-citation"] = "Semantics of a CITE Object citation";
index.add({
    url: "specification.html#semantics-of-a-cite-object-citation",
    title: "Semantics of a CITE Object citation",
    body: "## Semantics of a CITE Object citation ##  There are two major components to a citation with CITE  URN version 0.1:  a component identifying a naming authority, and a component uniquely identifying an object.     The naming authority component is a single identifer;  systems using CITE URNs must be able to resolve this value to a unique URI.  The object component is a hierarchy identifying sets of unique objects in versioned representations.  The sets *may* be ordered.  Conceptually, the object hierarchy is similar to code management systems such as maven that organize versioned packages in groups.  The object component begins with an identifier for a *collection*, which is a set of objects sharing a common set of properties.  Collections can represent any kind of physical objects (e.g., paintings in a museum) or conceptual objects (e.g., episodes in a prose narrative).   This identifier *may* be  followed by an identifier for a *unique notional object* within that collection.  This in turn *may* be followed with an identifier for a specific *version* of that object.  If the object component of the CITE URN is at the *notional object* or *version* level,  reference to a single object *may* be extended with additional, type-specific citation of some aspect or component of the object.     "
});

documentTitles["specification.html#syntax-of-a-cite-urn"] = "Syntax of a CITE URN";
index.add({
    url: "specification.html#syntax-of-a-cite-urn",
    title: "Syntax of a CITE URN",
    body: "## Syntax of a CITE URN ##    "
});

documentTitles["specification.html#overall-structure-of-a-cite-urn"] = "Overall structure of a CITE URN";
index.add({
    url: "specification.html#overall-structure-of-a-cite-urn",
    title: "Overall structure of a CITE URN",
    body: "### Overall structure of a CITE URN ###   All URNs must begin with the string `urn:` followed by a protocol identifier (the \&quot;urn namespace identifier\&quot;), followed by a colon (\&quot;:\&quot;, Unicode x003a). The protocol identifier for the CITE Object URN must be `cite`. The rest of the URN consists of a CITE namespace, and an object component.  The namespace must be separated from the object component by a colon.  A value for the CITE namespace and for the object component is required.  The top-level structure of a CITE URN could be summarized as      urn:cts:CITENAMESPACE:OBJECT  "
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
    body: "### Extended references ###  References to specific objects (either at the notional object level, or the version level) may be qualified by type-specific extended references.   The extended reference must be separated from the canonical reference by the \&quot;at\&quot; sign (\&quot;@\&quot;, Unicode x0040).  If URN includes an extended reference, the value of the extended reference must not be null.  The overall structure of a node reference could be summarized as      OBJECTCOMPONENT@EXTENDEDREFERENCE  "
});

documentTitles["specification.html#ranges-of-objects-in-ordered-collections"] = "Ranges of objects in ordered collections";
index.add({
    url: "specification.html#ranges-of-objects-in-ordered-collections",
    title: "Ranges of objects in ordered collections",
    body: "### Ranges of objects in ordered collections ###  Ranges of two or more nodes are identified by an ordered pair of object references as previously defined. The value for the first reference must identify the first object in the range; the value for the second node reference must identify the second object in the range. The two node references must be separated by the hyphen-minus sign (\&quot;-\&quot;, Unicode x002D).  The structure of a range reference could be summarized as      OBJECT1-OBJECT2  where each of `OBJECT1` and `OBJECT2` a valid reference to a citable object as previously defined, and the hyphen is literal.  "
});

documentTitles["specification.html#character-set"] = "Character set";
index.add({
    url: "specification.html#character-set",
    title: "Character set",
    body: "### Character set ###   CITE URNs must be expressed in the Unicode character set.  "
});

documentTitles["specification.html#reserved-code-points"] = "Reserved code points";
index.add({
    url: "specification.html#reserved-code-points",
    title: "Reserved code points",
    body: "### Reserved code points ###   Following the generic URN syntax, CITE URN reserves the use of the following code points: they must not be included in the data components of a CITE URN.  - the percent sign (\&quot;%\&quot; , Unicode x0025) - the solidus (\&quot;/\&quot; , Unicode x002F) - the question mark (\&quot;?\&quot; , Unicode x003F) - the number sign (\&quot;#\&quot;, Unicode x0023) -  The CITE URN specification additionally reserves the following code points, and limits their usage to the syntactic functions previously specified:  - the colon (\&quot;:\&quot;, Unicode x003A) - the full stop (\&quot;.\&quot;, Unicode x002E) -  the \&quot;at\&quot; sign (\&quot;@\&quot;, Unicode x0040) -  the hyphen-minus sign (\&quot;-\&quot;, Unicode x002D)     "
});

documentTitles["specification.html#excluded-code-points"] = "Excluded code points";
index.add({
    url: "specification.html#excluded-code-points",
    title: "Excluded code points",
    body: "### Excluded code points ###   Following the generic URN specification, CITE URNs exclude the following code points:  - all code points &lt; x0020 - the reverse solidus (\&quot;\\&quot;, Unicode x005C) - the quotation mark (\&quot;, Unicode x0022) - the ampersand (\&quot;&amp;\&quot; , Unicode x0026) - the less-than sign (\&quot;&lt;\&quot;, Unicode x003C) - the greater-than sign (\&quot;&gt;\&quot; , Unicode x003E) - the circumflex accent (\&quot;^\&quot; , Unicode x005E) - the grave accent (\&quot;`\&quot; , Unicode x0060) - the vertical line (\&quot;|\&quot; , Unicode x007C) - the left curly bracket (\&quot;{ , Unicode x007B) - the right curly bracket (\&quot;{ , Unicode x007D) - the tilde (\&quot;~ , Unicode x007E) - the left square bracket (\&quot;[\&quot;, Unicode x005B) - the right square bracket (\&quot;]\&quot;, Unicode x005D)  "
});



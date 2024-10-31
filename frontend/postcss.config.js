export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
  "dump statements": {
        "prefix": "dump",
        "body": [
            "initial begin", 
            "   dumpfile(\"${1:filename}\");",
            "   \$dumpvars();",
            "end"
        ],
        "description": "Prints the dump file and variables statements."
    },
}
